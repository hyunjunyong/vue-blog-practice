<template>
  <div class="test_inject">{{ message }}</div>
</template>

<script setup>
import { inject } from 'vue';

const message = inject('message', 'hello');
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
  margin: 10% 0 0 40%;
  background-color: yellow;
  border: 1px solid #ddd;
}
</style>
