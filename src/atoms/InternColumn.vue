<template>
  <div class="py-5 flex container mx-auto">
    <div class="flex-1 my-auto text-xl font-medium">{{ company }}</div>
    <div class="flex-1">
      <p>{{ startDate }} ~ {{ endDate }}</p>
      <p v-for="comment in comments" v-bind:key="comment.index">
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
