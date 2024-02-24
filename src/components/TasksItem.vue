<script setup>
import { useTasksStore } from "../stores/tasksStores.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "shield",
  },
});
const emit = defineEmits(["onclick"]);
const tasksStore = useTasksStore();
const task = tasksStore.getTaskById(props.id);
const handleClick = () => {
  emit("onclick", props.id);
};
</script>

<template>
  <button
    @click="handleClick"
    class="relative flex flex-col items-center justify-center text-center mx-auto"
  >
    <font-awesome-icon
      :icon="['fas', icon]"
      size="2xl"
      class="absolute bottom-7 bg-prairie-sand rounded-full p-2 text-amber-50 glow"
    />
    <span class="font-serif bg-prairie-sand rounded-xl p-2 text-amber-50">{{
      task.content
    }}</span>
  </button>
</template>

<style scoped>
.glow:hover {
  box-shadow:
    0 0 10px #fbbf24,
    0 0 20px #fbbf24,
    0 0 40px #fbbf24,
    0 0 80px #fbbf24,
    0 0 120px #fbbf24,
    0 0 160px #fbbf24;
}
</style>
