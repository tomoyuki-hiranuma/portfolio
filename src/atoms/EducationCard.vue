<template>
  <div class="my-10 mx-auto border-4 rounded-full py-9 px-6 border-gray-500">
    <p class="font-bold">School</p>
    <p>{{ school }}</p>
    <p class="font-bold">When</p>
    <p>{{ startDate }} - {{ endDate }}</p>
    <p class="font-bold">Research field</p>
    <p>{{ researchField }}</p>
  </div>
</template>

<script>
export default {
  name: 'EducationCard',
  props: {
    school: {
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
    researchField: {
      type: String,
      default: '',
    },
  },
};
</script>
