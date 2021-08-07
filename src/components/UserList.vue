<template>
  <div class="top-layout">
    <div class="sub-layout">
      <StickyHeader/>
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
import StickyHeader from './StickyHeader.vue';

export default defineComponent({
  name: 'UserList',
  components: {
    User, StickyHeader,
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
.top-layout {
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.sub-layout {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: 1fr;
  transition: all 1s;
}
@media screen and (min-width: 800px) {
  .top-layout {
    padding: 0 10%;
  }
}
</style>
