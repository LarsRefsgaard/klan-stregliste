<template>
  <div class="button-layout; center">
    <button @click="mutate(drink, true)">
      <span class="material-icons"> add </span>
    </button>
    <button @click="mutate(drink, false)">
      <span class="material-icons"> remove </span>
    </button>
  </div>
</template>

<script lang="ts">
import { addToDrink } from '@/db/actions';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    user: {} as never,
    drink: String,
  },
  setup(props) {
    const mutate = addToDrink(props);

    return { mutate };
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

.material-icons {
  font-size: 6vw;
  font-weight: bold;
}

button {
  font-family: Roboto;
  font-weight: 1000;
  width: 8vw;
  height: 8vw;
  margin: 0px auto;
  padding: 0;
  background: none;
  color: #2c3e50;
  border: none;
  border-radius: 10%;
  transition: all 0.15s;
  box-sizing: border-box;
  cursor: pointer;
}
button:hover {
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
