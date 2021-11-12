<template>
  <div class="flex flex-col flex-nowrap">
    <button data-cy="add" @click="mutate(drink, a => a + 1)">
      <span class="material-icons-round">add</span>
    </button>
    <button data-cy="remove" @click="mutate(drink, a => a ? a - 1 : a)">
      <span class="material-icons-round">remove</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { addToDrink } from '../db/actions';
import { drinks, Stregliste } from '../db/schema';

interface Props {
  user: Stregliste;
  drink: drinks;
}
const props = defineProps<Props>();

const mutate = addToDrink(props);
</script>


<style scoped>
.button-layout {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* justify-content: space-around; */
}

.material-icons-round {
  font-size: 6vw;
  font-weight: bold;
}

@media screen and (min-width: 768px) {
  button {
    width: 5vw;
    height: 5vw;
  }
  .material-icons-round {
    font-size: 4vw;
  }
}
</style>
