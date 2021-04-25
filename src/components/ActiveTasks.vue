<template>
  <div>
    <AddTask></AddTask>
    <Tasks :tasks="activeTasks"></Tasks>
  </div>
</template>
<script>
import Tasks from "./Tasks";
import AddTask from "./AddTask";

export default {
  components: {
    Tasks,
    AddTask,
  },
  computed: {
    activeTasks: {
      get() {
        return this.$store.state.activeTasks;
      },
    },
  },
};
</script>