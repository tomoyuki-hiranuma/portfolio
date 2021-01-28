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
          :image_src="skill.src"
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
          src: '/images/program/ruby.svg',
        },
        {
          program: 'C++',
          level: '★★☆☆',
          comment: '競技プログラミングに使用しています',
          src: '/images/program/c-plusplus.svg',
        },
        {
          program: 'Python',
          level: '★★★☆☆',
          comment: '研究で使用',
          src: '/images/program/python.svg',
        },
        {
          program: 'HTML5/CSS3',
          level: '★★★☆☆',
          src: '/images/program/html.svg',
        },
        {
          program: 'JavaScript(ES6)',
          level: '★★★☆☆',
          src: '/images/program/js.svg',
        },
        {
          program: 'Vue.js',
          level: '★★☆☆☆',
          comment: '本サイトに使用',
          src: '/images/program/vue.svg',
        },
        {
          program: 'Git',
          level: '★★★☆☆',
          src: '/images/program/git-icon.svg',
        },
        {
          program: 'AWS',
          level: '★★☆☆☆',
          comment: 'S3, EC2, RDS',
          src: '/images/program/aws.svg',
        },
        {
          program: 'Docker',
          level: '★★★☆☆',
          comment: 'Docker, docker-compose',
          src: '/images/program/docker.svg',
        },
      ],
    };
  },
};
</script>
