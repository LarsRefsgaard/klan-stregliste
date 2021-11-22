<template>
  <div class="flex flex-col">
    <StickyHeader />
    <div
      v-for="user in stregliste.docs"
      :key="user.id"
      :data-cy="user.data()['display-name']"
      class="flex flex-row"
    >
      <User :user="{ id: user.id, ...user.data() }" />
    </div>
    <div id="pseudo-element" class="flex flex-row" style="visibility: hidden;">
      <User :user="{ id: '', 'display-name': '', beer: 0, cider: 0 }"></User>
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
