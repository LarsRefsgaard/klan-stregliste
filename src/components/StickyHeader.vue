<template>
  <div
    id="stick"
    class="font-bold sticky top-0 w-full py-4 dark:bg-nord0 bg-nord6 grid grid-rows-1 sub-layout transition-all duration-300"
  >
    <p>Name</p>
    <p class="ml-auto mr-8">Beer</p>
    <p class="ml-auto mr-2">Cider</p>
  </div>
  <hr />
</template>

<script setup lang="ts">
window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {
  const header = document.getElementById("stick");
  if (header) {
    if (document.documentElement.scrollTop > 50) {
      header.style.fontSize = "calc(var(--text-size) - 0.5vw * 4)"
    } else {
      header.style.fontSize = "calc(var(--text-size) - 0.5vw)"
    }
  }
}
</script>

<style scoped>
.sub-layout {
  grid-template-columns: 9fr 2fr 2fr;
}

/* p {
  font-size: calc(var(--text-size) - 0.5vw);
} */
</style>
