import { defineStore } from 'pinia';

const useStore = defineStore('usersManipulation', {
  state() {
    return {
      isAddingName: false,
      addedName: '',

      isDeletingNames: false,
    };
  },
});

export default useStore;
