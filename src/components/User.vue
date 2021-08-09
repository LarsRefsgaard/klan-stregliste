<template>
  <div class="vertically-center">
    <h2 class="user-text">
      {{ user['display-name'] }}
    </h2>
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
import { Stregliste } from '@/db/schema';
import DrinkSetter from './DrinkSetter.vue';
import DrinkNumber from './DrinkNumber.vue';

export default defineComponent({
  components: { DrinkSetter, DrinkNumber },
  props: {
    user: {
      type: Object as never,
      default() {
        return {
          'display-name': '',
          beer: 0,
          cider: 0,
        } as Stregliste;
      },
    },
  },
});
</script>

<style>
.user-text {
  --drink-number: calc(var(--text-size) * 2);
  font-size: var(--text-size);
  font-weight: 800;
  margin: 0px auto;
  padding: 0px;
}
:root {
  --text-size: 4vw;
}
@media screen and (max-width: 800px) {
  :root {
    --text-size: 7vw;
  }
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
