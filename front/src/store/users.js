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
    async get(query) {
      // 1
      const responce = await fetch(´https:/`+`/api.github.com/users?q=${query}´);
      this.users = await responce.json();
      log(this.users);
      // 2
      const responce2 = await fetch("https://api.github.com/users?since=46");
      const data2 = await responce2.json();
      log(data2);
      // 3
      this.users.forEach(async (user, i) => {
        const responce3 = await fetch(user.repos_url);
        const data3 = await responce3.json();
        log(data3.length);
        this.users[i].repos = data3;
      });
    },
  },
});
