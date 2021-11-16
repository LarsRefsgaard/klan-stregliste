<template>
  <div class="top-0 w-full py-4 font-bold flex gap-2 sm:gap-4
  md:gap-16 xl:gap-20">
    <p class="flex-grow-[2] align-middle">Name</p>
    <p class="flex-grow-1">Beer</p>
    <p class="flex-grow-1">Cider</p>
  </div>
  <hr />
</template>

<script setup lang="ts">
const header = document.getElementById('stick');

const sticky = header?.offsetTop;

function handleScroll(): void {
  if (typeof sticky !== 'undefined') {
    if (window.pageYOffset > sticky) {
      // eslint-disable-next-line no-unused-expressions
      header?.classList.add('sticky-header');
    }
    // eslint-disable-next-line no-unused-expressions
    header?.classList.remove('sticky-header');
  }
  console.log('hi');
}
window.onscroll = () => {
  // eslint-disable-next-line no-unused-expressions
  handleScroll;
};
</script>

<style scoped>
p {
  font-size: calc(var(--text-size) - 0.5vw);
}
</style>
