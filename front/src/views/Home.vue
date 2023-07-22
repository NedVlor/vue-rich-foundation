<template>
  <!--<HelloWorld />-->
  {{ counter }}
  <v-btn icon="mdi-minus-thick" variant="tonal" @click="remove"></v-btn>
  <v-btn icon="mdi-plus-thick" variant="tonal" @click="add"></v-btn>

  <hr />
  <div class="card-wrapper">
    <v-card
      v-for="(item, i) in users"
      :key="item"
      class="mx-auto"
      max-width="344"
    >
      <v-img :src="item.avatar_url" height="200px" cover></v-img>

      <v-card-title>
        {{ item.login }}
      </v-card-title>

      <v-card-subtitle> {{ item.repos?.length }} repos </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show[i] = !show[i]"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show[i]">
          <v-divider></v-divider>

          <v-card-text>
            <div v-for="item in item.repos" :key="item">{{ item.name }}</div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, onMounted } from "vue";
let counter = ref(0); //
function add() {
  counter.value++;
  console.log(counter.value);
}
function remove() {
  counter.value--;
  console.log(counter.value);
}
const users = ref(null);
const show = ref([]);
fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((data) => {
    users.value = data;
    console.log(data);
    data.forEach((user, i) => {
      fetch(user.repos_url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.length);
          users.value[i].repos = data;
        });
    });
  });
</script>

<style>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.v-card {
  margin: 1rem;
}
</style>
