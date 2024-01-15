<script setup>
import CountNumber from "./CountNumber.vue";
</script>

<template>
  <nav class="flex bg-prairie-sand p-2 text-left overflow-hidden relative">
    <div
      class="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-full shadow"
    ></div>
    <span class="font-medieval-sharp text-white p-1.5 text-wrap"
      >Wisuda Gelombang 1 (Maret)</span
    >
    <div class="flex gap-1">
      <CountNumber count="62" />
      <CountNumber count="23" />
      <CountNumber count="59" />
      <CountNumber count="59" />
    </div>
  </nav>
</template>

<style scoped></style>
