<template>
  <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
    <div class="flex items-center space-x-4">
      <p>img</p>
    </div>
    <div class="flex-grow p-3">
      <div class="font-semibold text-gray-700">{{ program }}</div>
      <div class="text-sm">{{ level }}</div>
      <div class="text-sm text-gray-500">{{ comment }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    program: {
      type: String,
      default: '',
      required: true,
    },
    level: {
      type: String,
      default: '',
      required: true,
    },
    comment: {
      type: String,
      default: '',
      required: false,
    },
  },
  name: 'SkillCard',
};
</script>
