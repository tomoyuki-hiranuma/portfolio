<template>
  <div id="about">
    <p class="text-2xl md:text-4xl my-7 md:my-10 font-serif">About me</p>
    <div>
      <div class="w-3/5 mx-auto h-auto text-sm md:text-base">
        <div class="mx-auto">
          <img
            src="/images/icon.png"
            class="float-right"
            alt="profile"
            width="106px"
            height="106px"
          />
        </div>
        <div class="w-4/5 mx-auto">
          <div class="m-3">
            <p class="text-base md:text-xl font-bold text-left">Name</p>
            <p class="text-left pl-2">Tomoyuki Hiranuma</p>
          </div>
          <div class="m-3">
            <p class="text-base md:text-xl font-bold text-left">Belong to</p>
            <p class="text-left pl-2">Rakuten Group Inc.</p>
            <p class="text-left pl-2">2022.4 - current</p>
          </div>
          <div class="m-3">
            <p class="text-base md:text-xl font-bold text-left">Hobbies</p>
            <p class="text-left pl-2">Basketball</p>
            <p class="text-left pl-2">Disney</p>
            <p class="text-left pl-2">Movies</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 mx-auto text-sm md:text-lg my-7 md:my-10">
      <div>
        <p>I want to be a software engineer working around the world,</p>
        <p>and make applications like making the world more convenient.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
