<template>
  <div class="layout">
    <div style="display: flex; align-items: center">
      <h2>{{ user['display-name'] }}</h2>
    </div>
    <div class="drinks-layout">
      <DrinkNumber :count="user.beer" />
      <DrinkSetter :user="user" drink="beer" />
    </div>
    <div class="drinks-layout">
      <DrinkNumber :count="user.cider" />
      <DrinkSetter :user="user" drink="cider" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DrinkSetter from './DrinkSetter.vue';
import DrinkNumber from './DrinkNumber.vue';

export default defineComponent({
  props: {
    user: {},
  },
  components: { DrinkSetter, DrinkNumber },
});
</script>

<style scoped>
h2 {
  display: flex;
  font-size: 4em;
  align-items: center;
  margin: 0px 0px;
}
.drinks-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
