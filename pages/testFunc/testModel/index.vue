<script setup>
import { ref } from 'vue';
import TestInput from './testInput.vue';

const message = ref('hello');
</script>

<template>
  <!-- <TestInput v-model="message" />  -->
  <TestInput v-model:title="message" /> {{ message }}
</template>

<style lang="scss" scoped></style>
