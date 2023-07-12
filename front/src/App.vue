<template>

{{counter}}
<button @click="add">+</button>
<!--<router-view />--->

</template>

<script setup>
import { ref, onMounted } from 'vue'
let counter = ref(0);  //
function add(){
counter.value++;
console.log(counter.value);
}
</script>
