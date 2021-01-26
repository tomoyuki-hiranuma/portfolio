<template>
  <header>
    <div>
      <p>Top</p>
      <p>About Me</p>
      <p>Education</p>
      <p>Skills</p>
      <p>Works</p>
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
  width: 160px;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: darken(white, 5%);
  }
}
</style>
