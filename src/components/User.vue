<template>
  <div class="vertically-center">
    <h2 class="user-text">{{ user['display-name'] }}</h2>
  </div>
  <div class="drinks-layout">
    <DrinkNumber :count="user.beer" />
    <DrinkSetter :user="user" drink="beer" />
  </div>
  <div class="drinks-layout">
    <DrinkNumber :count="user.cider" />
    <DrinkSetter :user="user" drink="cider" />
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
.user-text {
  font-size: 7vw;
  font-weight: 800;
  margin: 0px auto;
  padding: 0px;
}
.vertically-center {
  display: grid;
  align-content: center;
  justify-content: start;
}

.drinks-layout {
  display: flex;
  flex-direction: row;
}
</style>
