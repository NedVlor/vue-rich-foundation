//ilities
const log = console.log;
import { defineStore } from "pinia";

export const useUsersStore = defineStore("user", {
  state: () => ({
    pointer: 1,
    users: [],
    usersFiltered: [],
  }),
  getters: {
    someGetter() {
      return null;
    },
  },
  actions: {
    async get(since) {
      // 2
      const responce2 = await fetch(
        "https://api.github.com/users?since=" + since,
      );
      const result = await responce2.json();
      this.users = [];
      setTimeout(() => {
        this.users = result;
      }, 100);
      // 3
      /* this.users.forEach(async (user, i) => {
        const responce3 = await fetch(user.repos_url);
        const data3 = await responce3.json();
        log(data3.length);
        this.users[i].repos = data3;
      });*/
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
      setTimeout(() => {
        this.users = result.items;
      }, 100);
      log(this.users);
    },
  },
});
