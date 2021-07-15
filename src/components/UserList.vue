<template>
  <h2>Users</h2>
  <div v-for="user in users" :key="user.id">
    {{user['scout-name']}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAllUsersFromDatabase } from '@/composables/getUser(s)';

export default defineComponent({
  name: 'UserList',
  setup() {
    const users = getAllUsersFromDatabase();

    return { users };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
