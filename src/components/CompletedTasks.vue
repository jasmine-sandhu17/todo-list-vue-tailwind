<template>
  <div class="mt-10">
    <Tasks
      :tasks="completedTasks"
      :show-delete="true"
      v-if="completedTasks.length > 0"
    ></Tasks>
    <div v-else class="flex justify-center flex-col">
      <img src="../assets/NoData.png" class="object-none object-center" />
      <p class="text-center">Oops No Task Is Completed Yet.</p>
    </div>
  </div>
</template>
<script>
import Tasks from "./Tasks";

export default {
  components: {
    Tasks,
  },
  computed: {
    completedTasks: {
      get() {
        return this.$store.state.completedTasks;
      },
    },
  },
};
</script>
