<script setup>
defineProps({
  status: {
    type: String,
    required: true,
  },
  activeStatus: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update"]);
</script>

<template>
  <button :class="{
    'bg-amber-50 text-prairie-sand font-serif px-3 py-1 rounded-xl':
      activeStatus === status,
  }" @click="emit('update', status)">
    {{ status }}
  </button>
</template>

<style scoped></style>
