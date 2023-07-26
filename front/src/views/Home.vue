<template>
  <!--<HelloWorld />-->
  {{ counter }}
  <v-btn icon="mdi-minus-thick" variant="tonal" @click="remove"></v-btn>
  <v-btn icon="mdi-plus-thick" variant="tonal" @click="add"></v-btn>

  <hr />
  <div class="card-wrapper">
    <Card v-for="(item, i) in users" :key="i" :item="item" />
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Card.vue";
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
    fetch("https://api.github.com/users?since=46")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
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
