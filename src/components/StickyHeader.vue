<template>
  <div class="top-0 w-full py-4 font-bold grid grid-rows-1 sub-layout">
    <p>Name</p>
    <p class="ml-auto mr-2 md:mr-4">Beer</p>
    <p class="ml-auto mr-2">Cider</p>
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
.sub-layout {
  grid-template-columns: 2fr 1fr 1fr;
}

p {
  font-size: calc(var(--text-size) - 0.5vw);
}
</style>
