<template>
  <div id="app" class="mt-5 md:mt-16">
    <MyHeader />
    <Main />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import Main from './components/Main.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
    Main,
    MyFooter,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
