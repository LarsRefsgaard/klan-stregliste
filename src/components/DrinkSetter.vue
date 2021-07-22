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
import { db } from '@/db/db';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    user: {} as any,
    drink: String,
  },
  setup(props) {
    const mutate = (drink: string, isAdd: boolean) => {
      // eslint-disable-next-line no-nested-ternary
      const getAmount = (amnt: number) => {
        if (!amnt) return isAdd ? 0 : 1;
        return amnt;
      };
      const amnt = getAmount(props.user[drink]);
      const data = {
        [drink]: amnt + (isAdd ? 1 : -1) || 0,
      };

      db.collection('stregliste-mvp')
        .doc(props.user.id)
        .update(data)
        .catch((err) => {
          console.log(err);
        });
    };

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

button {
  font-family: Roboto;
  /* font-size: 8vw; */
  font-weight: 1000;
  width: 5vw;
  height: 5vw;
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
