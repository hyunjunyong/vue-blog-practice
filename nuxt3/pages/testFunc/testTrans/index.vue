<template>
  <div id="testTrans">
    <div class="trans_Btn">
      <button @click="show = !show">Toggle</button>
    </div>

    <!-- <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition> -->
    <div class="trans_result">
      <Transition>
        <p v-if="show">hello</p>
      </Transition>

      <!-- <Transition name="bounce">
        <p v-if="show">Hello here is some bouncy text!</p>
      </Transition> -->
    </div>
  </div>
</template>

<script setup>
const show = ref(false);
</script>

<style scoped>
.trans_Btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 10% 0 0 10%;
  background-color: yellow;
  border: 1px solid #ddd;
}
.trans_result {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin: 10% 0 0 10%;
  color: white;
  background-color: blue;
  border: 1px solid #ddd;
  text-align: center;
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
