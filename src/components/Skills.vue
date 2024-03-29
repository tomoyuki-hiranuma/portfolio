<template>
  <div id="skills">
    <p class="text-2xl md:text-4xl my-5 md:my-10 font-serif">Skills</p>
    <p class="text-lg md:text-2xl my-3 md:my-5">language&amp;Frameworks</p>
    <div
      class="
        container
        mx-auto
        grid grid-cols-1
        sm:grid-cols-3
        gap-3
        justify-center
        items-center
        w-1/2
        sm:w-full
      "
    >
      <div v-for="skill in skills" :key="skill.program">
        <div @click="openModal(skill)">
          <SkillCard
            :program="skill.program"
            :level="skill.level"
            :comment="skill.comment"
            :imageSrc="skill.src"
          />
        </div>
      </div>
    </div>
    <SkillModal v-show="isModalOpen" :val="postSkill" @close="closeModal" />
    <p class="text-lg md:text-2xl my-10">Work experience</p>
    <div v-for="intern in interns" :key="intern.company">
      <InternColumn
        :company="intern.company"
        :start-date="intern.startDate"
        :end-date="intern.endDate"
        :comments="intern.comments"
      />
    </div>
    <Qualifications />
  </div>
</template>

<script>
import SkillCard from '../atoms/SkillCard';
import InternColumn from '../atoms/InternColumn';
import Qualifications from '../components/Qualification';
import SkillModal from './SkillModal';

export default {
  name: 'Skills',
  components: {
    SkillCard,
    InternColumn,
    Qualifications,
    SkillModal,
  },
  data: function () {
    return {
      isModalOpen: false,
      postSkill: {},
      // mock-serverなどでデータを外に保持
      skills: [
        {
          program: 'Next.js',
          level: '★★★★☆',
          comment:
            'SSR,SSGの使い分けが可能. パフォーマンスを意識したコードは学習中',
          experience: '2年',
          src: '/images/program/nextjs.svg',
        },
        {
          program: 'Ruby',
          level: '★★☆☆☆',
          comment: 'RailsでWeb開発。自動ログインスクリプトも作成',
          experience: '2年',
          src: '/images/program/ruby.svg',
        },
        {
          program: 'C++',
          level: '★★☆☆☆',
          comment: '競技プログラミングに使用',
          experience: '2年',
          src: '/images/program/c-plusplus.svg',
        },
        {
          program: 'Python',
          level: '★★☆☆☆',
          comment: '研究で使用。Flaskで簡単なAPI開発。',
          experience: '3年',
          src: '/images/program/python.svg',
        },
        {
          program: 'React',
          level: '★★★★☆',
          comment: '一番好きなライブラリ',
          experience: '3年',
          src: '/images/program/react.svg',
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
          comment: '本サイトに使用。インターンで使用。',
          experience: '半年',
          src: '/images/program/vue.svg',
        },
        {
          program: 'AWS',
          level: '★☆☆☆☆',
          comment: 'S3, EC2, RDSを使ったインフラ構築経験',
          experience: '3ヶ月',
          src: '/images/program/aws.svg',
        },
        {
          program: 'Docker',
          level: '★★★☆☆',
          comment: 'docker,docker-composeをつかった環境構築に使用',
          experience: '2年',
          src: '/images/program/docker.svg',
        },
        {
          program: 'Java',
          level: '★★☆☆☆',
          comment: 'Springを使った実務経験あり',
          experience: '1年',
          src: '/images/program/springio-icon.svg',
        },
      ],
      interns: [
        {
          company: 'Rakuten inc.',
          startDate: '2022/4/1',
          endDate: '2023/2/23',
          comments: [
            '22卒正社員入社。社内ツールのフロントエンドの整備およびバックエンド開発。Java、React',
          ],
        },
        {
          company: 'Rakuten inc.',
          startDate: '2021/8/19',
          endDate: '2022/3/31',
          comments: ['内定者アルバイトとして，Java,Reactを使って開発'],
        },
        {
          company: 'Inprog inc.',
          startDate: '2021/6/20',
          endDate: '2022/3/28',
          comments: [
            'アルバイトエンジニア1期生として働く.',
            'プロダクト開発責任者として従事',
            'Next+Typescript+Hasura(GraphQL)を利用',
          ],
        },
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
  methods: {
    openModal(skill) {
      this.isModalOpen = true;
      this.postSkill = skill;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
