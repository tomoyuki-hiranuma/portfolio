<template>
  <main>
    <div>
      <div>
        <div
          id="top"
          class="static bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400"
        >
          <div id="message" class="">
            <div class="font-serif hover:text-gray-400 cursor-default">
              Tomoyuki Hiranuma
            </div>
            <div class="font-serif hover:text-gray-400 cursor-default">
              Welcome to my portfolio!!
            </div>
          </div>
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
#top {
  height: 425px;
  width: 100%;
  position: relative;
}
#message {
  position: absolute;
  font-size: 40px;
  left: 10%;
  top: 50%;
}
</style>
