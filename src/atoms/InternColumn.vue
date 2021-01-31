<template>
  <div class="py-5 flex container mx-auto">
    <div class="flex-1 my-auto text-xl font-medium">{{ company }}</div>
    <div class="flex-1">
      <p>{{ start_date }} ~ {{ end_date }}</p>
      <p>{{ comment }}</p>
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
    start_date: {
      type: String, // Dateとかのほうがよさそう
    },
    end_date: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
};
</script>
