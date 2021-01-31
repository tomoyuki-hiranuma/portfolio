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
    <div>
      <!-- コンポーネントに分ける -->
      <div class="py-5 flex container mx-auto">
        <div class="flex-1 my-auto text-xl font-medium">TeamLab Inc.</div>
        <div class="flex-1">
          <p>2020/11/26 ~ 2020/12/23</p>
          <p>
            Work as a backend engineer in the e-commerce technology actually
          </p>
        </div>
      </div>
      <div class="py-5">
        <p class="">Rakuten Inc.</p>
        <div>
          <p>2020/9/1 ~ 2020/9/11</p>
          <p>
            Develop a new service as a prototype in the theme "Connect people
            online"<br />
            Work as a leader of backend engineers and a project leader in our
            team
          </p>
        </div>
      </div>
      <div class="py-5">
        <p>e-Seikatsu Inc.</p>
        <div>
          <p>2020/8/24 ~ 2020/8/28</p>
          <p>Develop a Property search service using in-house API</p>
        </div>
      </div>
      <div class="py-5">
        <p>GA Technologies Inc.</p>
        <div>
          <p>2020/6/27 ~ 2020/6/28</p>
          <p>
            Develop a prototype service that overcomes to replace with furniture
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from '../atoms/SkillCard';

export default {
  name: 'Skills',
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

<style lang="scss" scoped>
.intern {
  height: 500px;
}
</style>
