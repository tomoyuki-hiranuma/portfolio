<template>
  <div>
    <p class="text-4xl my-10 font-serif">Skills</p>
    <div
      class="container mx-auto grid grid-cols-3 gap-3 justify-center items-center"
    >
      <div v-for="skill in skills" v-bind:key="skill.program">
        <SkillCard
          :program="skill.program"
          :level="skill.level"
          :comment="skill.comment"
        />
      </div>
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
  data: function () {
    return {
      skills: [
        {
          program: 'Ruby on Rails',
          level: '★★★★☆',
          comment: '調べながらある程度のアプリ作れます',
        },
        {
          program: 'C++',
          level: '★★☆☆',
          comment: '競技プログラミングに使用しています',
        },
        {
          program: 'Python',
          level: '★★★☆☆',
          comment: '研究で使用',
        },
        {
          program: 'HTML5/CSS3',
          level: '★★★☆☆',
        },
        {
          program: 'JavaScript(ES6)',
          level: '★★★☆☆',
        },
        {
          program: 'Vue.js',
          level: '★★☆☆☆',
          comment: '本サイトに使用',
        },
        {
          program: 'Git',
          level: '★★★☆☆',
        },
        {
          program: 'AWS',
          level: '★★☆☆☆',
          comment: 'S3, EC2, RDS',
        },
        {
          program: 'Docker',
          level: '★★★☆☆',
          comment: 'Docker, docker-compose',
        },
      ],
    };
  },
};
</script>
