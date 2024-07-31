<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import BaseSidebar from "./components/BaseSidebar.vue";
import TasksFlow from "./components/TasksFlow.vue";
import mermaid from "mermaid";

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
  </header>
  <main class="flex flex-col gap-10">
    <TasksFlow />
  </main>
  <BaseSidebar />
</template>

<style scoped></style>
