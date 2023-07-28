<template>
  {{ counter }}
  <v-btn icon="mdi-minus-thick" variant="tonal" @click="remove"></v-btn>
  <v-btn icon="mdi-plus-thick" variant="tonal" @click="add"></v-btn>
</template>

<script setup>
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
</script>
<style></style>
