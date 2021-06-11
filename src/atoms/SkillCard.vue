<template>
  <div
    class="
      bg-gray-100
      hover:bg-gray-300
      cursor-pointer
      flex
      items-center
      p-2
      rounded-xl
      shadow-lg
      border
      m-1
    "
  >
    <div class="flex items-center space-x-4">
      <img :src="imageSrc" width="25" />
    </div>
    <div class="flex-grow p-3">
      <div class="text-sm sm:text-lg font-semibold text-gray-700">
        {{ program }}
      </div>
      <div class="text-xs sm:text-sm">
        {{ level }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
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
    imageSrc: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
