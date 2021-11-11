<template>
  <div class="top-layout">
    <StickyHeader />
    <div
      v-for="user in stregliste.docs"
      :key="user.id"
      :data-cy="user.data()['display-name']"
      class="sub-layout"
    >
      <User :user="{ id: user.id, ...user.data() }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { db } from '../db/db';
import User from './User.vue';
import StickyHeader from './StickyHeader.vue';
import { onSnapshot, query, orderBy } from '@firebase/firestore';

const stregliste = ref<Record<string, any>>({});

onSnapshot(query(db, orderBy('display-name')), (querySnapshot) => {
  stregliste.value = querySnapshot;
});

</script>

<style scoped>
.top-layout {
  display: flex;
  flex-direction: column;
}

.sub-layout {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: 1fr;
}
@media screen and (min-width: 800px) {
  .top-layout {
    padding: 0 10%;
  }
}
</style>
