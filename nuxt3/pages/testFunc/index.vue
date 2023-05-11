<template>
  <div id="name"></div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello!',
    };
  },
  provide() {
    return {
      message: this.message,
    };
  },
};
</script>

<style lang="scss" scoped></style>
