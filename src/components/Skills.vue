<template>
  <div id="skills">
    <p class="text-4xl my-10 font-serif">Skills</p>
    <p class="text-2xl my-5">language&Frameworks</p>
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
    <p class="text-2xl my-10">Work experience</p>
    <!-- 変数にしてfor文で回す -->
    <div v-for="intern in interns" v-bind:key="intern.company">
      <InternColumn
        :company="intern.company"
        :startDate="intern.startDate"
        :endDate="intern.endDate"
        :comments="intern.comments"
      />
    </div>
  </div>
</template>

<script>
import SkillCard from '../atoms/SkillCard';
import InternColumn from '../atoms/InternColumn';

export default {
  name: 'Skills',
  components: {
    SkillCard,
    InternColumn,
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
      interns: [
        {
          company: 'Teamlab Inc.',
          startDate: '2020/11/26',
          endDate: '2020/12/23',
          comments: [
            'Work as a backend engineer in the e-commerce technology actually',
          ],
        },
        {
          company: 'Rakuten Inc.',
          startDate: '2020/9/1',
          endDate: '2020/9/11',
          comments: [
            'Develop a new service as a prototype in the theme "Connect people online"',
            'Work as a leader of backend engineers and a project leader in our team',
          ],
        },
        {
          company: 'e-Seikatsu Inc.',
          startDate: '2020/8/24',
          endDate: '2020/8/28',
          comments: ['Develop a Property search service using in-house API'],
        },
        {
          company: 'GA Technologies Inc.',
          startDate: '2020/6/27',
          endDate: '2020/6/28',
          comments: [
            'Develop a prototype service that overcomes to replace with furniture',
          ],
        },
      ],
    };
  },
};
</script>
