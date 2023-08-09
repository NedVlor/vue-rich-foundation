<template>
  <div>
    <div class="panel">
      <v-btn prepend-icon="mdi-arrow-left" variant="text" @click="begin">
        Begin</v-btn
      >
      <v-text-field
        class="from-user-id"
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
    </div>
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
  usersStore.query = "";
}

const loading = ref(false);
const fromUserId = ref(0);
function specific() {
  console.log(fromUserId.value);
  usersStore.get(fromUserId.value);
  usersStore.query = "";
}
function next() {
  const last = usersStore.users.pop();
  const sinse = last.id + 1;
  usersStore.get(sinse);
  console.log("two", last);
  usersStore.query = "";
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
.from-user-id {
  width: 10rem;
}
.panel {
  display: flex;
  width: 20rem;
  margin: 1rem auto;
}
</style>
