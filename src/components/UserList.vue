<template>
  <!-- <h2>UserList</h2> -->
  <div v-for="user in users" :key="user.id">
    <hr />
    <User :user="user" :event="event" />
  </div>
  <hr />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import User from './User.vue';

export default defineComponent({
  name: 'UserList',
  components: {
    User,
  },
  setup() {
    const users = {};
    return { users };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
