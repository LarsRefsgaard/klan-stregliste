<template >
  <div data-cy="name" class="mr-auto flex items-center">
    <span class="p-0 mx-0 overflow-auto font-bold user-text">{{ user['display-name'] }}</span>
  </div>
  <div data-cy="beer" class="flex flex-row m-0">
    <DrinkNumber :count="user.beer ?? 0" />
    <DrinkSetter :user="user" drink="beer" />
  </div>
  <div data-cy="cider" class="flex flex-row mx-0">
    <DrinkNumber :count="user.cider ?? 0" />
    <DrinkSetter :user="user" drink="cider" />
  </div>
</template>

<script setup lang="ts">
import DrinkSetter from './DrinkSetter.vue';
import DrinkNumber from './DrinkNumber.vue';
import { Stregliste } from '../db/schema';

const props = defineProps<{ user: Stregliste }>();
</script>

<style>
.user-text {
  --drink-number: calc(var(--text-size) * 2);
  font-size: var(--text-size);
}
:root {
  --text-size: 4vw;
}
@media screen and (max-width: 768px) {
  :root {
    --text-size: 7vw;
  }
}
</style>
