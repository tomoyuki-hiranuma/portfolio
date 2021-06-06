<template>
  <div
    class="bg-gray-100 hover:bg-gray-300 cursor-pointer flex items-center p-2 rounded-xl shadow-lg border m-1"
    v-on:click="handleClick"
  >
    <div class="flex items-center space-x-4">
      <img :src="image_src" width="25" />
    </div>
    <div class="flex-grow p-3">
      <div class="text-sm sm:text-lg font-semibold text-gray-700">
        {{ program }}
      </div>
      <div class="text-xs sm:text-sm">{{ level }}</div>
      <div class="text-xs sm:text-sm text-gray-500">{{ comment }}</div>
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
    image_src: {
      type: String,
      default: '',
      required: false,
    },
  },
  name: 'SkillCard',
  methods: {
    handleClick: function () {
      alert(this.program + 'について\n工事中');
    },
  },
};
</script>
