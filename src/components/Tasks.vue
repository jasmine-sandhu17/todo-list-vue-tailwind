<template>
  <div class="flex flex-col" v-if="tasks.length > 0">
    <div class="flex items-center" v-for="task in tasks" :key="task.id">
      <input
        type="checkbox"
        class="form-checkbox h-4 w-4 text-indigo-600"
        @click="taskCompleted(task)"
        :checked="task.isCompleted"
      />
      <div class="flex justify-between items-start w-full">
        <span class="ml-2 text-gray-700">{{ task.task }}</span>
        <div class="flex flex-row mx-1 items-start">
          <div
            class="flex justify-center items-center font-medium py-1 px-2 bg-white rounded-full text-green-700 bg-green-100 border border-green-300"
            v-if="task.isCompleted"
          >
            <div
              class="text-xs font-normal leading-none max-w-full flex-initial"
            >
              Completed
            </div>
          </div>
          <div
            class="flex justify-center items-center font-medium py-1 px-2 bg-white rounded-full text-yellow-700 bg-yellow-100 border border-yellow-300"
            v-else
          >
            <div
              class="text-xs font-normal leading-none max-w-full flex-initial"
            >
              In Progress
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="grey"
            @click="showWarning = true"
            v-if="showDelete"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
      <DeleteTask
        :task="task"
        :delete-all="deleteAll"
        v-if="showWarning"
        @closeWarning="closeWarning()"
      ></DeleteTask>
    </div>
    <div v-if="tasks.length >= 2 && showDelete">
      <button
        class="bg-red-500 hover:bg-red-700 text-white rounded py-1 px-2 mb-0 h-full float-right mt-10 w-1/4"
        @click="deleteAllTasks()"
      >
        Delete All
      </button>
    </div>
  </div>
</template>
<script>
import DeleteTask from "./DeleteTask";
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
      default: () => {
        [];
      },
    },
    showDelete: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    DeleteTask,
  },
  data() {
    return {
      showWarning: false,
      deleteAll: false,
    };
  },
  methods: {
    taskCompleted(task) {
      this.$store.commit("taskCompleted", task);
    },
    closeWarning() {
      this.showWarning = !this.showWarning;
      if (this.deleteAll) {
        this.deleteAll = false;
      }
    },
    deleteAllTasks() {
      this.deleteAll = true;
      this.showWarning = true;
    },
  },
};
</script>
