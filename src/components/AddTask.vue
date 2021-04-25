<template>
  <div class="grid grid-cols-4 my-6 flex content-start">
    <div class="pt-0 col-span-3">
      <input
        type="text"
        placeholder="Add Details"
        v-model="task"
        @keyup.enter="addTask()"
        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
    <div class="col-span-1">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mb-0 h-full ml-3"
        @click="addTask()"
      >
        Add New
      </button>
    </div>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      let payload = {
        task: this.task,
        id: uuidv4(),
        isCompleted: false,
      };
      this.$store.commit("addTask", payload);
      this.task = "";
    },
  },
};
</script>

