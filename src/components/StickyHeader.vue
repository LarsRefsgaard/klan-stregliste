<template>
  <div id="stick" class="sub-layout">
    <h1>Name</h1>
    <h1>Beer</h1>
    <h1>Cider</h1>
  </div>
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
h1 {
  font-size: calc(var(--text-size) - 0.5vw);
  margin: 0;
}

.sticky-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
}
</style>
