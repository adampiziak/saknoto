import { FSRS, Rating, fsrs, generatorParameters } from "ts-fsrs";
import { RepCard, Repertoire } from "./Repertoire";

export class StudySession {
  done: RepCard[] = [];
  doing: RepCard[] = [];
  todo: RepCard[] = [];
  repertoire: Repertoire | undefined;

  f: FSRS = fsrs(generatorParameters({ enable_fuzz: true }));

  load(rep: Repertoire) {
    this.repertoire = rep;
  }

  async refresh() {
    const now = new Date();
    now.setHours(24, 0, 0, 0);

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
    now.setHours(24, 0, 0, 0);

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
