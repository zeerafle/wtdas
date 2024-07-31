<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import BaseSidebar from "./components/BaseSidebar.vue";
import DialogItem from "./components/DialogItem.vue";
import mermaid from "mermaid";

const showWelcomeModal = () => {
  const welcomeBtn = document.getElementById("welcome");
  if (welcomeBtn) {
    welcomeBtn.showModal();
  }
}
</script>

<template>
  <NavigationBar />
  <header
    class="flex items-center justify-center flex-col text-center overflow-hidden rounded-b-2xl bg-gradient-to-b from-zinc-800 to-white dark:from-zinc-800">
    <img src="/src/assets/wtdas.svg" alt="logo" class="transform scale-150 origin-center" />
    <button @click="showWelcomeModal" class="btn btn-primary btn-sm absolute">Panduan</button>
    <DialogItem id="welcome" />
  </header>
  <main class="flex flex-col gap-10">
    <BaseSidebar />
  </main>
</template>

<style scoped></style>
