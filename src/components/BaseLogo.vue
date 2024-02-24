<script setup></script>

<template>
  <p class="logo font-bold size-3.5">WTDAS</p>
</template>

<style scoped>
:root {
  --shadow-color: #fff7db;
  --shadow-color-light: white;
}

.logo {
  color: white;
  animation: neon 3s infinite;
}

@keyframes neon {
  0% {
    text-shadow:
      -1px -1px 1px var(--shadow-color-light),
      -1px 1px 1px var(--shadow-color-light),
      1px -1px 1px var(--shadow-color-light),
      1px 1px 1px var(--shadow-color-light),
      0 0 3px var(--shadow-color-light),
      0 0 10px var(--shadow-color-light),
      0 0 20px var(--shadow-color-light),
      0 0 30px var(--shadow-color),
      0 0 40px var(--shadow-color),
      0 0 50px var(--shadow-color),
      0 0 70px var(--shadow-color),
      0 0 100px var(--shadow-color),
      0 0 200px var(--shadow-color);
  }
  50% {
    text-shadow:
      -1px -1px 1px var(--shadow-color-light),
      -1px 1px 1px var(--shadow-color-light),
      1px -1px 1px var(--shadow-color-light),
      1px 1px 1px var(--shadow-color-light),
      0 0 5px var(--shadow-color-light),
      0 0 15px var(--shadow-color-light),
      0 0 25px var(--shadow-color-light),
      0 0 40px var(--shadow-color),
      0 0 50px var(--shadow-color),
      0 0 60px var(--shadow-color),
      0 0 80px var(--shadow-color),
      0 0 110px var(--shadow-color),
      0 0 210px var(--shadow-color);
  }
  100% {
    text-shadow:
      -1px -1px 1px var(--shadow-color-light),
      -1px 1px 1px var(--shadow-color-light),
      1px -1px 1px var(--shadow-color-light),
      1px 1px 1px var(--shadow-color-light),
      0 0 3px var(--shadow-color-light),
      0 0 10px var(--shadow-color-light),
      0 0 20px var(--shadow-color-light),
      0 0 30px var(--shadow-color),
      0 0 40px var(--shadow-color),
      0 0 50px var(--shadow-color),
      0 0 70px var(--shadow-color),
      0 0 100px var(--shadow-color),
      0 0 200px var(--shadow-color);
  }
}
</style>
