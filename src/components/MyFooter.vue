<template>
  <footer>
    <p>&copy;{{ thisYear }}- Tomoyuki Hiranuma. All rights reserved.</p>
    <p>Github</p>
    <p>Twitter</p>
    <p>Blog</p>
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
  padding-top: 10px;
}
</style>
