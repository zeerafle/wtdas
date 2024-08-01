<script setup>
const endTime = new Date('2024-09-10T08:00:00').getTime()
const time = endTime - new Date().getTime()
</script>

<template>
  <nav class="flex p-2 text-left bg-zinc-800">
    <span ></span>
    <vue-countdown :time="time" :interval="100" v-slot="{ days, hours }" class="font-medieval-sharp text-white p-1.5 text-wrap">
      Wisuda Gelombang 3 (September) dalam {{ days }} Hari, {{ hours }} Jam.
    </vue-countdown>
  </nav>
</template>

<style scoped></style>
