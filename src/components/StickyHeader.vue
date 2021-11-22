<template>
  <div
    ref="stick_header"
    class="sticky top-0 flex flex-row w-full py-4 font-bold transition-all duration-300 dark:bg-nord0 bg-nord6 fontsize center"
    @click="changeSize"
  >
    <span>Name</span>
    <span ref="beer" class="ml-auto">Beer</span>
    <span ref="cider">Cider</span>
  </div>
  <hr />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const beer = ref<HTMLElement | null>(null);
const cider = ref<HTMLElement | null>(null);
const stick_header = ref<HTMLElement | null>(null);

const changeSize = () => {
  const element = document.getElementById('pseudo-element');
  const beerSize = element?.children[1].clientWidth;
  const ciderSize = element?.children[2].clientWidth;
  console.log(element);
  if (beer.value) beer.value.style.width = `${beerSize}px`;
  if (cider.value) cider.value.style.width = `${ciderSize}px`;
}

const scrollFunction = () => {
  if (stick_header.value) {
    if (document.documentElement.scrollTop > 50) {
      stick_header.value.style.fontSize = "calc(var(--text-size) - 0.5vw * 4)"
      stick_header.value.style.paddingBottom = '0.5rem'
    } else {
      stick_header.value.style.paddingBottom = '1rem'
      stick_header.value.style.fontSize = "calc(var(--text-size) - 0.5vw)"
    }
  }
}
window.onscroll = scrollFunction;
onMounted(changeSize);
window.onresize = changeSize;
</script>

<style scoped>

.fontsize {
  font-size: calc(var(--text-size) - 0.5vw);
}
</style>
