import { FSRS, Rating, fsrs, generatorParameters } from "ts-fsrs";
import { RepCard, Repertoire } from "./Repertoire";

export class StudySession {
  done: RepCard[] = [];
  doing: RepCard[] = [];
  todo: RepCard[] = [];
  repertoire: Repertoire;

  f: FSRS = fsrs(generatorParameters({ enable_fuzz: true }));

  constructor(rep: Repertoire) {
    this.repertoire = rep;
  }

  async refresh() {
    const now = new Date();

    const reps = await this.repertoire.getAll();
    for (const r of reps) {
      const rep_due = new Date(r.card.due);
      if (rep_due < now) {
        this.todo.push(r);
      }
    }
  }

  setScheduled(cards: RepCard[]) {
    this.todo = cards;
  }

  getCard(): RepCard | null {
    const next_todo = this.todo.pop();
    if (next_todo) {
      this.doing.push(next_todo);
    }

    return this.doing.at(0) ?? null;
  }

  take(card: RepCard) {
    const stages = ["todo", "doing", "done"];

    for (const stage of stages) {
      const i = this[stage].findIndex((c) => c.fen === card.fen);
      if (i !== -1) {
        const [target] = this[stage].splice(i, 1);
        return target;
      }
    }

    return null;

    // const get_index = (arr, fen) => {
    //   return arr.map((c) => c.fen).indexOf(fen);
    // };

    // const remove_card = (arr, index) => {
    //   if (index === -1) {
    //     return null;
    //   }

    //   const card = arr[index];
    //   arr.splice(index, 1);
    //   return card;
    // };

    // const todo_index = get_index(this.todo, card.fen);
    // const doing_index = get_index(this.doing, card.fen);
    // const done_index = get_index(this.done, card.fen);

    // console.log(card.fen);
    // console.log(this.todo.find((c) => c.fen === card.fen));
    // console.log(this.doing.find((c) => c.fen === card.fen));

    // console.log(todo_index);
    // console.log(doing_index);
    // console.log(done_index);

    // const searches = [
    //   remove_card(this.todo, todo_index),
    //   remove_card(this.doing, doing_index),
    //   remove_card(this.done, done_index),
    // ];

    // return searches.find((v) => v !== null);
  }

  getProgress(): object {
    return {
      todo: this.todo.length,
      doing: this.doing.length,
      done: this.done.length,
    };
  }

  practiceCard(rep: RepCard, rating: Rating.Again | Rating.Good) {
    const scheduling = this.f.repeat(rep.card, rep.card.due);

    const updated_card = scheduling[rating].card;
    rep.card = updated_card;

    this.repertoire.updateRep(rep, updated_card);
    const now = new Date();

    // console.log(this.take(rep));
    this.take(rep);
    if (updated_card.due > now) {
      this.done.push(rep);
    } else {
      if (rating === Rating.Again) {
        this.doing.unshift(rep);
      } else {
        this.doing.push(rep);
      }
    }
  }
}
