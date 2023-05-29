<script setup>
// defineProps(['modelValue']);
// defineEmits(['update:modelValue']);
// const props = defineProps(['modelValue']);
// const emit = defineEmits(['update:modelValue']);

defineProps(['title']);
defineEmits(['update:title']);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <!-- <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->
  <!-- <input v-model="value" /> -->
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
