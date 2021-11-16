<template>
  <div class="sidebar">
    <SideBarIcon icon="person_add" tooltip="Add a person" />
    <SideBarIcon icon="person_remove" tooltip="Remove a person" />
    <SideBarIcon icon="replay" tooltip="Reset to 0" @click="resetList" />
    <div class="seperator"></div>
    <SideBarIcon icon="sync_alt" tooltip="Import/Export list" />
  </div>
</template>

<script setup lang="ts">
import { resetList } from '../db/actions';
import SideBarIcon from './SideBarIcon.vue';
</script>

