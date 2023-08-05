<template>
  <div>
    <v-btn prepend-icon="mdi-arrow-left" variant="text" @click="begin">
      Begin</v-btn
    >
    <v-text-field
      :loading="loading"
      density="compact"
      label="Search templates"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="specific"
      v-model="fromUserId"
      type="number"
    ></v-text-field>

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

function begin() {
  usersStore.get(0);
}

const loading = ref(false);
const fromUserId = ref(0);
function specific() {
  console.log(fromUserId.value);
  usersStore.get(fromUserId.value);
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
