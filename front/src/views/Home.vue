<template>
  <div>
    <v-btn prepend-icon="mdi-arrow-left" variant="text" @click="previous">
      Previous</v-btn
    >
    <v-btn append-icon="mdi-arrow-right" variant="text" @click="next">
      Next</v-btn
    >
    <div class="card-wrapper">
      <div v-for="(item, i) in usersStore.users" :key="i + 'card'">
        <Card :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
import { ref, onMounted } from "vue";
import { useUsersStore } from "@/store/users.js";
const usersStore = useUsersStore();
usersStore.get();

function previous() {
  console.log("one");
}

function next() {
  const last = usersStore.users.pop();
  const sinse = last.id + 1;
  usersStore.get(sinse);
  console.log("two", last);
}
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
