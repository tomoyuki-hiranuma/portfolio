<template>
  <div class="py-10 flex justify-center">
    <div class="mx-10">
      <p class="font-extrabold text-xl font-serif">{{ work_name }}</p>
      <div class="text-sm">{{ where }}</div>
      <div class="container border-4 my-2 py-2 border-pink-300">
        <div>使用技術</div>
        <div v-for="skill in skills" v-bind:key="skill.index">
          <li class="text-left mx-10">{{ skill }}</li>
        </div>
      </div>
    </div>
    <div class="max-w-sm">
      <img :src="img_path" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorksCard',
  props: {
    work_name: String,
    where: String,
    skills: Array,
    img_path: String,
  },
};
</script>
