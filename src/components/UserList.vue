<template>
  <div class="top-layout">
    <StickyHeader />
    <div v-for="user in stregliste.docs" :key="user.id" class="sub-layout">
      <User :user="{ id: user.id, ...user.data() }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { db } from '@/db/db';
import User from './User.vue';
import StickyHeader from './StickyHeader.vue';

const stregliste = ref({});

db.collection('stregliste-mvp')
  .orderBy('display-name', 'asc')
  .onSnapshot((res) => {
    stregliste.value = res;
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
