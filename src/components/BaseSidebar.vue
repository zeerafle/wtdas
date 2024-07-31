<script setup>
import DialogItem from "./DialogItem.vue";

const sideItemClick = (nodeId) => {
  const modalElement = document.getElementById(nodeId);
  if (modalElement) {
    modalElement.showModal();
  }
}
</script>

<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden fixed top-1/2 left-0 transform -translate-y-1/2 rotate-90 origin-center z-0"
        >
          Side Quest
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
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
        </ul>
      </div>
    </div>
  </div>
</template>
