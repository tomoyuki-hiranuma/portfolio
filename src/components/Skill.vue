<template>
  <div>
    <p class="text-4xl my-10 font-serif">Skills</p>
    <!-- TODO: card componentにして使い回すようにする -->
    <div class="container mx-auto grid grid-cols-3 justify-center items-center">
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
      <SkillCard />
    </div>
  </div>
</template>

<script>
import SkillCard from '../atoms/SkillCard';

export default {
  name: 'Skill',
  components: {
    SkillCard,
  },
};
</script>
