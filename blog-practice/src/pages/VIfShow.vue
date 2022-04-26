<template>
  <div id="name">
    <div v-if="vIf"><h1>v-if를 test 함</h1></div>
    <div v-show="vShow"><h1>v-show 를 test 함</h1></div>
    <button @click="btn">v-if,v-show test</button>
  </div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      vIf: true,
      vShow: true,
    };
  },
  methods: {
    btn() {
      this.vIf = !this.vIf;
      this.vShow = !this.vShow;
    },
  },
};
</script>

<style scoped>
div {
  width: 500px;
  height: 200px;
  text-align: center;
}
button {
  width: 100px;
  height: 50px;
  background-color: orange;
}
</style>
