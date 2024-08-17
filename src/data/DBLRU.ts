export class DBLRU {
  tablename: string;
  maxsize: number;

  constructor(tablename: string, maxSize = 1000) {
    this.tablename = tablename;
    this.maxsize = maxSize;
  }
}
