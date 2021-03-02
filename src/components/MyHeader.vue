<template>
  <header>
    <div>
      <a href="#" v-scroll-to="'#top'">
        <p
          class="font-serif w-24 md:w-36 lg:w-52 text-sm md:text-lg lg:text-xl"
        >
          Top
        </p>
      </a>
      <a href="#" v-scroll-to="'#about'">
        <p
          class="font-serif w-24 md:w-36 lg:w-52 text-sm md:text-lg lg:text-xl"
        >
          About Me
        </p>
      </a>
      <a href="#" v-scroll-to="'#education'">
        <p
          class="font-serif w-24 md:w-36 lg:w-52 text-sm md:text-lg lg:text-xl"
        >
          Education
        </p>
      </a>
      <a href="#" v-scroll-to="'#skills'">
        <p
          class="font-serif w-24 md:w-36 lg:w-52 text-sm md:text-lg lg:text-xl"
        >
          Skills
        </p>
      </a>
      <a href="#" v-scroll-to="'#works'">
        <p
          class="font-serif w-24 md:w-36 lg:w-52 text-sm md:text-lg lg:text-xl"
        >
          Works
        </p>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 10;
  height: auto;
}

p {
  padding: 16px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: darken(white, 5%);
  }
}
</style>
