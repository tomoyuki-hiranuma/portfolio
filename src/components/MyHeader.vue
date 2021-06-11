<template>
  <header>
    <div>
      <a v-scroll-to="'#top'" href="#">
        <p
          class="
            font-serif
            w-24
            md:w-36
            lg:w-52
            text-sm
            md:text-lg
            lg:text-xl
            p-2
            sm:p-4
          "
        >
          Top
        </p>
      </a>
      <a v-scroll-to="'#about'" href="#">
        <p
          class="
            font-serif
            w-24
            md:w-36
            lg:w-52
            text-sm
            md:text-lg
            lg:text-xl
            p-2
            sm:p-4
          "
        >
          About Me
        </p>
      </a>
      <a v-scroll-to="'#education'" href="#">
        <p
          class="
            font-serif
            w-24
            md:w-36
            lg:w-52
            text-sm
            md:text-lg
            lg:text-xl
            p-2
            sm:p-4
          "
        >
          Education
        </p>
      </a>
      <a v-scroll-to="'#skills'" href="#">
        <p
          class="
            font-serif
            w-24
            md:w-36
            lg:w-52
            text-sm
            md:text-lg
            lg:text-xl
            p-2
            sm:p-4
          "
        >
          Skills
        </p>
      </a>
      <a v-scroll-to="'#works'" href="#">
        <p
          class="
            font-serif
            w-24
            md:w-36
            lg:w-52
            text-sm
            md:text-lg
            lg:text-xl
            p-2
            sm:p-4
          "
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
  display: inline-block;
  cursor: pointer;
  &:hover {
    background-color: darken(white, 5%);
  }
}
</style>
