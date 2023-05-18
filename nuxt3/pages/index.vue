<template>
  <NuxtLink class="underline font-medium" :href="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>

<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>

<script setup></script>

<style scoped></style>
