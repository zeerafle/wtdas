<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import BaseModal from "./components/BaseModal.vue";
import { ref } from "vue";
import TasksItem from "./components/TasksItem.vue";

const showModal = ref(false);
const markdownFile = ref("/guides/welcome.md");
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
        markdownFile = '/guides/welcome.md';
        showModal = true;
      "
    >
      Panduan
    </button>
  </header>
  <main>
    <TasksItem
      id="revisidosen"
      @onclick="markdownFile = $event"
      @click="showModal = true"
    />
  </main>
  <BaseModal
    :show="showModal"
    @update:show="showModal = $event"
    :markdown-file="markdownFile"
  >
  </BaseModal>
</template>

<style scoped></style>
