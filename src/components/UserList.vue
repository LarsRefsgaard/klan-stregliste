<template>
  <div class="flex flex-col ">
    <StickyHeader />
    <div
      v-for="user in stregliste.docs"
      :key="user.id"
      :data-cy="user.data()['display-name']"
      class="grid grid-rows-1 sub-layout"
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

onSnapshot(query(db, orderBy('display-name', 'asc')), (querySnapshot) => {
  stregliste.value = querySnapshot;
});

</script>

<style scoped>
.sub-layout {
  grid-template-columns: 2fr 1fr 1fr;
}
</style>
