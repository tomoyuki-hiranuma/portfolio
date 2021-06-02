<template>
  <main>
    <div>
      <Top />
      <About />
      <Education />
      <Skills />
      <Works />
    </div>
  </main>
</template>

<script>
import Top from './Top.vue';
import About from './About.vue';
import Education from './Education';
import Skills from './Skills';
import Works from './Works';

export default {
  name: 'Main',
  components: {
    Top,
    About,
    Education,
    Skills,
    Works,
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
</style>
