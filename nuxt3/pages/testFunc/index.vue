<template>
  <div class="testProvide">
    <!-- <input class="message" type="text" v-model="message" /> -->
    <TestInject />
  </div>
</template>

<script setup>
// https://stackoverflow.com/questions/73304880/what-is-the-benefit-to-use-usenuxtapp-on-nuxt3
// 참고자료
import TestInject from './testInject/index.vue';
import { provide } from 'vue';
const nuxtApp = useNuxtApp();
nuxtApp.provide('hello', (name) => `Hello ${name}!`);

// const message = ref('hi');
// provide('message', message);
const location = ref('North Pole');

function updateLocation() {
  location.value = 'South Pole';
}

provide('location', {
  location,
  updateLocation,
});
</script>

<style scoped>
.testProvide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.message {
  border: 1px solid #ddd;
}
</style>
