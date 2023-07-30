<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      :loading="loading"
      density="compact"
      label="Search templates"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="onClick"
      v-model="query"
    ></v-text-field>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/store/users.js";
const usersStore = useUsersStore();
const loaded = ref(false);
const loading = ref(false);
const query = ref("");
function onClick() {
  loading.value = true;
  usersStore.get(query.value);
  console.log(query.value);
  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
}
const drawer = ref(false);
const group = ref(null);
const items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);
</script>
<style>
.v-input__details {
  /*  display: none !important;*/
}
</style>
