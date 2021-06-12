<template>
  <div class="py-5 md:py-10 sm:flex justify-center">
    <div class="mx-10">
      <p class="font-extrabold text-lg md:text-xl font-serif">
        {{ workName }}
      </p>
      <div class="text-xs md:text-sm">
        {{ where }}
      </div>
      <div class="container border-4 my-2 py-2 border-pink-300">
        <div class="text-sm md:text-base">使用技術</div>
        <div v-for="skill in skills" :key="skill.index">
          <li class="text-left mx-5 md:mx-10">
            {{ skill }}
          </li>
        </div>
      </div>
    </div>
    <div class="max-w-sm mx-10">
      <img :src="imgPath" />
      <div v-if="codeUrl" class="mt-4">
        <a class="hover:text-blue-200" :href="codeUrl">source</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorksCard',
  props: {
    workName: {
      type: String,
      default: '',
    },
    where: {
      type: String,
      default: '',
    },
    skills: {
      type: Array,
      default: () => [],
    },
    imgPath: {
      type: String,
      default: '',
    },
    codeUrl: {
      type: String,
      default: '',
    },
  },
};
</script>
