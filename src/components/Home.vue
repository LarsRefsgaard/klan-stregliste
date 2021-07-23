<template>
  <UserList />
  <Info />
</template>
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
  display: flex;
  flex-direction: row;
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
