import { FSRS, Rating, fsrs, generatorParameters } from "ts-fsrs";
import { RepCard, Repertoire } from "./Repertoire";

export interface StudyCard {
  rep: RepCard;
  attempts: number;
}

enum StudyStage {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

type Stage = {
  [key in StudyStage]: RepCard[];
};

export class StudySession {
  stage: Stage = {
    todo: [],
    doing: [],
    done: [],
  };
  current: RepCard | undefined;
  repertoire: Repertoire | undefined;
  currentType: StudyStage | undefined = StudyStage.TODO;

  // f: FSRS = fsrs(generatorParameters({ enable_fuzz: true }));
  f: FSRS;
  midnight: Date;

  constructor() {
    this.midnight = new Date();
    // this.midnight.setHours(24, 0, 0, 0);
    this.f = fsrs();
  }

  load(rep: Repertoire) {
    this.repertoire = rep;
  }

  async refresh() {
    if (!this.repertoire) {
      return;
    }

    const now = new Date();
    // now.setHours(24, 0, 0, 0);

    const reps = await this.repertoire.all();
    for (const r of reps) {
      const rep_due = new Date(r.card.due);
      if (rep_due < now) {
        this.stage.todo.push(r);
      }
    }
  }

  getCard(): RepCard | undefined {
    const todo = this.stage.todo.pop();
    if (todo) {
      this.stage.doing.push(todo);
      this.currentType = StudyStage.TODO;
    } else {
      this.currentType = StudyStage.DOING;
    }

    this.current = this.stage.doing.pop();

    return this.current;
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
      todo:
        this.stage.todo.length + (this.currentType === StudyStage.TODO ? 1 : 0),
      doing:
        this.stage.doing.length +
        (this.currentType === StudyStage.DOING ? 1 : 0),
      done: this.stage.done.length,
    };
  }

  practice(rating: Rating.Again | Rating.Good): RepCard | undefined {
    if (!this.repertoire || !this.current) {
      return;
    }

    const scheduling = this.f.repeat(this.current.card, this.current.card.due);
    this.current.card = scheduling[rating].card;
    this.current.card = scheduling[rating].card;

    this.repertoire.schedule(this.current, this.current.card);

    // if incorrect do again
    if (rating == Rating.Again) {
      this.currentType = StudyStage.DOING;
      return this.current;
    }

    // If DONE
    if (this.current.card.due > this.midnight) {
      this.stage.done.push(this.current);
    }

    // Otherwise put back in DOING pile
    else {
      this.stage.doing.unshift(this.current);
    }
    this.current = undefined;
    this.currentType = undefined;
  }
}
