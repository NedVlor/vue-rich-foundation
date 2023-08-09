//ilities
const log = console.log;
function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
import { defineStore } from "pinia";

export const useUsersStore = defineStore("user", {
  state: () => ({
    pointer: 1,
    users: [],
    usersFiltered: [],
    query: "",
  }),
  getters: {
    someGetter() {
      return null;
    },
  },
  actions: {
    async get(since) {
      const responce2 = await fetch(
        "https://api.github.com/users?since=" + since,
      );
      const result = await responce2.json();
      this.users = [];
      await pause(100);
      this.users = result;
    },
    async getAdditionalInfo(id) {
      log(id);
      this.users.forEach(async (user, i) => {
        if (id == user.id) {
          const responce3 = await fetch(user.repos_url);
          const data3 = await responce3.json();
          log(data3.length);
          this.users[i].repos = data3;
        }
      });
    },
    async search(query) {
      if (!query) return;
      const responce = await fetch(
        "https://api.github.com/search/users?q=" + query,
      );
      const result = await responce.json();
      this.users = [];
      await pause(100);
      this.users = result.items;
      log(this.users);
    },
  },
});
