<template>
  <transition name="modal">
    <div id="overlay">
      <div id="content" class="modal is-active modal-content">
        <img :src="val.src" />
        <p>技術：{{ val.program }}</p>
        <p>レベル：{{ val.level }}</p>
        <p>{{ val.comment }}</p>
        <p v-if="val.experience">経験歴：{{ val.experience }}</p>
        <button @click="$emit('close')">閉じる</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SkillModal',
  props: ['val'],
};
</script>

<style lang="scss" scoped>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
  background-color: whitesmoke;
}

#content > img {
  width: 15%;
  margin: auto;
}
.modal-enter-active,
.modal-leave-active {
  opacity: 1;
  transform: scale(1.1);
  transition: opacity 0.5s;
  .modal-content {
    transform: scale(1.2);
    transition: 1.1s;
  }
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s, transform 0s 0.5s;
  .modal-content {
    transform: scale(0);
  }
}
</style>
