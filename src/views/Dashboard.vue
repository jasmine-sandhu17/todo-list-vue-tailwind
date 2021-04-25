<template>
  <div class="container mx-auto my-10 flex flex-col items-center">
    <h1 class="text-2xl mb-7">Todo List</h1>
    <FilterTabs
      @tabSelected="componentToRender($event)"
      class="w-1/2"
    ></FilterTabs>
    <keep-alive>
      <component v-bind:is="currentTabComponent" class="w-1/2"></component>
    </keep-alive>
  </div>
</template>
<script>
import FilterTabs from "../components/FilterTabs";
import AllTasks from "../components/AllTasks";
import ActiveTasks from "../components/ActiveTasks";
import CompletedTasks from "../components/CompletedTasks";

export default {
  components: {
    FilterTabs,
    AllTasks,
    ActiveTasks,
    CompletedTasks,
  },
  data() {
    return {
      currentTabComponent: "AllTasks",
    };
  },
  methods: {
    componentToRender(data) {
      this.currentTabComponent = data;
    },
  },
};
</script>
