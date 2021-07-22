<template>
  <div class="layout">
    <div class="center" style="text-align: start">
      <h1 style="font-size: 5vw;">Name</h1>
    </div>
    <div class="center">
      <h1 style="font-size: 5vw;">Beer</h1>
    </div>
    <div class="center">
      <h1 style="font-size: 5vw;">Cider</h1>
    </div>
  </div>
  <UserList />
  <Info />
</template>
2
<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '@/components/UserList.vue';
import Info from '@/components/BottomInfoBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    UserList,
    Info,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  gap: 20px;
}

.center {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  text-align: center;
}
</style>
