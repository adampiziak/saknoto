export default class UserManager {
  username: string | null = null;

  load() {
    if (typeof window === "undefined") {
      return;
    }
    this.username = localStorage.getItem("username");
  }

  get() {
    return this.username;
  }

  set(username: string) {
    this.username = username;
    localStorage.setItem("username", this.username);
  }
}
