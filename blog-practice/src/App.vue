<template>
  <div id="app">
    <router-link to="/router1">v-ifshow로이동</router-link>
    <test></test>
    <router-view></router-view>
  </div>
</template>

<script>
import test from './views/test';
export default {
  name: 'App',
  components: {
    test,
  },
};
</script>

<style></style>
