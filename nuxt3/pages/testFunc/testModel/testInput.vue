<script setup>
// defineProps(['modelValue']);
// defineEmits(['update:modelValue']);

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

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
  <input v-model="value" />
</template>
