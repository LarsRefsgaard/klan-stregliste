<template>
  <!-- <h2>UserList</h2> -->
  <div v-for="user in stregliste.docs" :key="user.id">
    <hr />
    <User :user="{ 'id': user.id, ...user.data() }" />
  </div>
  <hr />
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

    db.collection('stregliste-mvp').onSnapshot((res) => {
      // const docs = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      stregliste.value = res;
      console.log(res);
    });

    return { stregliste };
  },
});
</script>

<style scoped>
</style>
