<template>
  <div id="testTrans">
    <button @click="show = !show">Toggle</button>
    <!-- <Transition >
      <p v-if="show">hello</p>
    </Transition>
    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition> -->
    <Transition name="bounce">
      <p v-if="show">Hello here is some bouncy text!</p>
    </Transition>
  </div>
</template>

<script setup>
const show = ref(false);
</script>

<style scoped>
#testTrans {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  height: 200px;
  border-radius: 10px;
  width: 14%;
  margin: 10% 0 0 10%;
  background-color: yellow;
  border: 1px solid #ddd;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
