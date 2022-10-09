<template>
  <div id="app">
    <router-link to="/router1">v-ifshow로이동</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {},
  created() {
    axios
      .get(
        'https://187757af-e74b-4c0a-9644-ad603fd8c17c.mock.pstmn.io/productList'
      )
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style></style>
