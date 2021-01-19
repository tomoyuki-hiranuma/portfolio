<template>
  <main>
    <div>
      <div>
        <div
          class="static bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 h-96 pt-2"
        >
          <p class="antialiased text-4xl my-12">
            Welcome to Tomoyuki Hiranuma's Portfolio!
          </p>
        </div>
      </div>
      <About />
      <Education />
    </div>
  </main>
</template>

<script>
import About from './About.vue';
import Education from './Education';

export default {
  name: 'Main',
  components: {
    About,
    Education,
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
</style>
