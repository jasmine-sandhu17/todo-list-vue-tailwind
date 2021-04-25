<template>
  <div>
    <AddTask></AddTask>
    <Tasks :tasks="allTasks"></Tasks>
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
    allTasks: {
      get() {
        return this.$store.state.allTasks;
      },
    },
  },
};
</script>
