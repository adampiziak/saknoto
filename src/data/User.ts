export default class User {
  name: string | null = null;

  constructor() {
    this.name = window.localStorage.getItem("username");
  }
}
