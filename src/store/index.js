import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allTasks: [],
    activeTasks: [],
    completedTasks: [],
  },
  mutations: {
    addTask(state, obj) {
      state.allTasks = [...state.allTasks, ...[obj]];
      this.commit("setActiveTasks");
    },
    taskCompleted(state, obj) {
      let tasks = state.allTasks;
      tasks.forEach((task) => {
        if (task.id === obj.id) {
          task.isCompleted = !task.isCompleted;
          return true;
        } else {
          return false;
        }
      });
      state.allTasks = tasks;
      this.commit("setCompletedTasks");
      this.commit("setActiveTasks");
    },
    setCompletedTasks(state) {
      state.completedTasks = state.allTasks.filter((obj) => {
        return obj.isCompleted === true;
      });
    },
    setActiveTasks(state) {
      state.activeTasks = state.allTasks.filter((obj) => {
        return !obj.isCompleted;
      });
    },
    deleteTask(state, obj) {
      let tasks = state.allTasks;
      tasks.forEach((task, index) => {
        if (task.id === obj.id) {
          tasks.splice(index, 1);
          return true; //Break the loop
        } else {
          return false;
        }
      });
      state.allTasks = tasks;
      this.commit("setCompletedTasks");
      this.commit("setActiveTasks");
    },
    deleteAllTask(state) {
      state.allTasks = state.allTasks.filter(
        (task) => !state.completedTasks.includes(task)
      );
      state.completedTasks = [];
    },
  },
  actions: {},
  modules: {},
});
