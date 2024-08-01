<script setup>
import { ref } from "vue";
import DialogItem from "./DialogItem.vue";
import TasksFlow from "./TasksFlow.vue";

const sideItemClick = (nodeId) => {
  const modalElement = document.getElementById(nodeId);
  if (modalElement) {
    modalElement.showModal();
  }
}

const showSideQuestBtn = ref(true)
</script>

<template>
  <div>
    <div class="drawer lg:drawer-open font-serif">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <label for="my-drawer-2" @click="showSideQuestBtn = false" :class="['btn btn-xs drawer-button lg:hidden fixed top-1/2 left-0 transform -translate-y-1/2 rotate-90 origin-center z-10 -m-9',
          showSideQuestBtn ? 'display' : 'hidden']">
          Tugas Sampingan
        </label>
        <TasksFlow />
      </div>
      <div class="drawer-side">
        <label @click="showSideQuestBtn = true" for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li><a>Beli buku</a></li>
          <li><a>Isi Tracer Study Mahasiswa</a></li>
          <li><a>Fotocopy Ijazah</a></li>
          <li><a>Fotocopy slip UKT</a></li>
          <li><a>KHS asli</a></li>
          <li><a>KHS semester pendek</a></li>
          <li><a>Nilai PKL & KKN (Asli)</a></li>
          <li><a>Pas foto</a></li>
          <li><a>Bebas pustaka perpus Unmul</a></li>
          <li><a>Sumbang buku perpus Unmul</a></li>
          <li><a>Beli Toga</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
