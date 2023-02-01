<template>
  <footer class="relative">
    <p class="float-left absolute top-2/3 left-8 text-sm md:text-base">
      &copy;{{ thisYear }}- Tomoyuki Hiranuma. All rights reserved.
    </p>
    <div class="absolute right-10 top-1/3 text-sm md:text-base">
      <a href="https://github.com/tomoyuki-hiranuma" class="m-2">Github</a>
      <a href="https://twitter.com/__N_u_m_a" class="m-2">Twitter</a>
      <a href="https://numa-blog.vercel.app/" class="m-2">Blog</a>
      <a href="https://www.linkedin.com/in/tomoyuki-hiranuma-695266206/">
        LinkedIn
      </a>
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
