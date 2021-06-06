<template>
  <div
    class="py-5 flex container mx-auto border-2 rounded-lg my-10 border-gray-500 shadow-lg"
  >
    <p class="mx-10 my-auto text-sm md:text-lg">
      {{ startDate }} ~ {{ endDate }}
    </p>
    <div class="flex-1 my-auto text-lg md:text-xl font-medium">
      {{ company }}
    </div>
    <div class="flex-1 mx-2">
      <p
        class="text-sm md:text-lg"
        v-for="comment in comments"
        v-bind:key="comment.index"
      >
        {{ comment }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InternColumn',
  props: {
    company: {
      type: String,
    },
    startDate: {
      type: String, // Dateとかのほうがよさそう
    },
    endDate: {
      type: String,
    },
    comments: {
      type: Array,
    },
  },
};
</script>
