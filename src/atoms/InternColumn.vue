<template>
  <div
    class="
      py-5
      flex
      container
      mx-auto
      border-2
      rounded-lg
      my-10
      border-gray-500
      shadow-lg
    "
  >
    <p class="mx-10 my-auto text-sm md:text-lg">
      {{ startDate }} ~ {{ endDate }}
    </p>
    <div class="flex-1 my-auto text-lg md:text-xl font-medium">
      {{ company }}
    </div>
    <div class="flex-1 mx-2">
      <p
        v-for="comment in comments"
        :key="comment.index"
        class="text-sm md:text-lg"
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
      default: '',
    },
    startDate: {
      type: String, // Dateとかのほうがよさそう
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    comments: {
      type: Array,
      default: [''],
    },
  },
};
</script>
