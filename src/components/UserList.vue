<template>
  <div class="top-layout">
    <div class="sub-layout">
      <h1>Name</h1>
      <h1>Beer</h1>
      <h1>Cider</h1>
    </div>
    <hr />
    <div v-for="user in stregliste.docs" :key="user.id" class="sub-layout">
      <User :user="{ id: user.id, ...user.data() }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { db } from '@/db/db';
import User from './User.vue';

export default defineComponent({
  name: 'UserList',
  components: {
    User,
  },
  setup() {
    const stregliste = ref({});

    db.collection('stregliste-mvp')
      .orderBy('display-name', 'asc')
      .onSnapshot((res) => {
        stregliste.value = res;
      });

    return { stregliste };
  },
});
</script>

<style scoped>
h1 {
  font-size: 5vw;
  margin: 0;
}
.top-layout {
  display: flex;
  flex-direction: column;
}

.sub-layout {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: 1fr;
}
</style>
