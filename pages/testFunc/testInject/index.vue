<template>
  <div class="test_inject">
    <!-- <p>{{ name }}</p> -->
    <button @click="updateLocation">{{ location }}</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const nuxtApp = useNuxtApp();
const message = inject('message');

const { location, updateLocation } = inject('location');

// const name = nuxtApp.$hello('jhy');
</script>

<style scoped>
.test_inject {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 300px;
  border-radius: 10px;
  width: 20%;
  margin: 10% 0 0 10%;
  background-color: yellow;
  border: 1px solid #ddd;
}
</style>
