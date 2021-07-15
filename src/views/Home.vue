<template>
  <div class="layout">
    <div><h1>Name</h1></div>
    <div><h1>Beer</h1></div>
    <div><h1>Cider</h1></div>
  </div>
  <UserList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '@/components/UserList.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    UserList,
  },
  setup() {
    return {};
  },
});
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;
}
</style>
