<template>
  <div
    id="top"
    class="static bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 text-2xl md:text-4xl lg:text-5xl"
  >
    <div id="message">
      <div class="font-serif hover:text-gray-400 cursor-default">
        Tomoyuki Hiranuma
      </div>
      <div class="font-serif hover:text-gray-400 cursor-default">
        Welcome to my portfolio!!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
};
</script>

<style lang="scss" scoped>
#top {
  height: 425px;
  width: 100%;
  position: relative;
}
#message {
  position: absolute;
  left: 10%;
  top: 50%;
}
</style>
