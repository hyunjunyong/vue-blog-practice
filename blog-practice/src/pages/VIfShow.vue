<template>
  <div id="name">
    <div v-if="vIf">v-if를 test 함</div>
    <div v-show="vShow">v-show 를 test 함</div>
    <button @click="btn"></button>
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
      vIf = !vIf;
      vShow = !vShow;
    },
  },
};
</script>

<style lang="scss" scoped></style>
