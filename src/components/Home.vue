<template>
  <UserList />
  <Info />
</template>
<script setup lang="ts">
import UserList from '@/components/UserList.vue';
import Info from '@/components/BottomInfoBar.vue'; // @ is an alias to /src

</script>

<style>
.center {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  text-align: center;
}
</style>
