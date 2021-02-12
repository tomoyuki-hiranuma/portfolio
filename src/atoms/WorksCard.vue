<template>
  <div class="py-10 flex justify-center">
    <div class="mx-10">
      <p>{{ work_name }}</p>
      <div>{{ where }}</div>
      <div>
        <div>使用技術</div>
        <div v-for="skill in skills" v-bind:key="skill.index">
          <li>{{ skill }}</li>
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
