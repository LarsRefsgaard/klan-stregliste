<template>
  <div class="button-layout">
    <button @click="addOne">+</button>
    <button @click="subtractOne">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    streger: {},
    drink: String,
  },
  setup() {
    const addToDrinks = () => ({});

    return { addToDrinks };
  },
});
</script>

<style scoped>
.button-layout {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* justify-content: space-around; */
}

button {
  font-family: Roboto;
  font-size: 2em;
  width: 48px;
  height: 48px;
  margin: -6px auto;
  padding: 0;
  background: none;
  border: none;
  border-radius: 10%;
  transition: all 0.15s;
  box-sizing: border-box;
  cursor: pointer;
}
button:hover {
  font-size: 2.5em;
  background: whitesmoke;
}

/* button {
  background: none;
  border: none;
  font-size: 5em;
  padding: 0;
} */
/*
button {
  font-family: Roboto;
  font-size: 2.5em;
  font-weight: bold;
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  background-color: none;
  background: none;
  border: none;
  border-radius: 10%;
  transition: all 0.3s;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  line-height: 100%;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.1), inset 0 0 0 rgba(0, 0, 0, 0.1);
  text-align: left;
}
button:hover {
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
  background-color: #dcdcdc;
} */
</style>
