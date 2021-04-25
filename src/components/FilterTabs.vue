<template>
  <div class="bg-white flex justify-center">
    <nav class="flex flex-col sm:flex-row">
      <button
        :class="[
          'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none',
          openTab === 'all'
            ? 'text-blue-500 border-b-2 font-medium border-blue-500'
            : '',
        ]"
        @click="$emit('tabSelected', 'AllTasks'), (openTab = 'all')"
      >
        All Tasks
      </button>
      <button
        :class="[
          'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none',
          openTab === 'active'
            ? 'text-blue-500 border-b-2 font-medium border-blue-500'
            : '',
        ]"
        @click="$emit('tabSelected', 'ActiveTasks'), (openTab = 'active')"
      >
        Active Tasks
      </button>
      <button
        :class="[
          'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none',
          openTab === 'completed'
            ? 'text-blue-500 border-b-2 font-medium border-blue-500'
            : '',
        ]"
        @click="$emit('tabSelected', 'CompletedTasks'), (openTab = 'completed')"
      >
        Completed Tasks
      </button>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openTab: "all",
    };
  },
};
</script>