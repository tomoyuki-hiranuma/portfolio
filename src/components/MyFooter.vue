<template>
  <footer class="relative">
    <p class="float-left absolute top-1/3 left-8">
      &copy;{{ thisYear }}- Tomoyuki Hiranuma. All rights reserved.
    </p>
    <div class="absolute right-10 top-1/3">
      <a href="https://github.com/tomoyuki-hiranuma" class="m-2">Github</a>
      <a href="https://twitter.com/__N_u_m_a" class="m-2">Twitter</a>
      <a href="https://numa-blog.tokyo/" class="m-2">Blog</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
  data() {
    return {
      thisYear: '2021',
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: lighten(dimgray, 30%);
  height: 140px;
}
</style>
