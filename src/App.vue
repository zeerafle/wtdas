<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import BaseModal from "./components/BaseModal.vue";
import { ref, onMounted } from "vue";
import TasksItem from "./components/TasksItem.vue";
import { useTasksStore } from "./stores/tasksStores.js";
import TasksFlow from "./components/TasksFlow.vue";
import mermaid from "mermaid";

const showModal = ref(false);
const currentTaskId = ref("");
const handleClickEvent = (id) => {
  currentTaskId.value = id;
};
const tasksStore = useTasksStore();

onMounted(async () => {
  const fetchPromises = tasksStore.getTasks.map((task) =>
    tasksStore.fetchMarkdown(task.id, `guides/${task.id}.md`),
  );
  await Promise.all(fetchPromises);
});
</script>

<template>
  <NavigationBar />
  <header
    class="flex items-center justify-center flex-col text-center overflow-hidden rounded-b-2xl bg-gradient-to-b from-zinc-800 to-white"
  >
    <img
      src="/src/assets/wtdas.svg"
      alt="logo"
      class="transform scale-150 origin-center"
    />
    <button
      class="absolute rounded-xl bg-prairie-sand py-1.5 px-3.5 font-serif mt-2.5 text-amber-50 hover:bg-amber-50 hover:text-prairie-sand transition duration-300 ease-in-out"
      @click="
        handleClickEvent('welcome');
        showModal = true;
      "
    >
      Panduan
    </button>
  </header>
  <main class="flex flex-col gap-10">
    <TasksFlow />
  </main>
  <BaseModal
    :show="showModal"
    @update:show="showModal = $event"
    :task-id="currentTaskId"
  >
  </BaseModal>
</template>

<style scoped></style>
