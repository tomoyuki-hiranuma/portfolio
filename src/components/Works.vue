<template>
  <div id="works">
    <p class="text-4xl my-10 font-serif">Works</p>
    <div v-for="work in works" v-bind:key="work.work_name">
      <WorksCard
        :work_name="work.work_name"
        :where="work.where"
        :skills="work.skills"
        :img_path="work.img_src"
      />
    </div>
  </div>
</template>

<script>
import WorksCard from '../atoms/WorksCard';

export default {
  name: 'Works',
  components: {
    WorksCard,
  },
  data: function () {
    return {
      works: [
        {
          work_name: 'オンライン衣類計測サービス',
          where: 'Vignette&Clarity合同会社のサービス',
          skills: ['Ruby on Rails', 'BootStrap', 'AWS(S3, RDB, EC2)', 'Flask'],
          img_src: '/images/works/jeans_measure.png',
        },
        {
          work_name: 'TheaTalk',
          where: '楽天株式会社サマーインターンで開発',
          skills: [
            'Ruby on Rails',
            'Material UI',
            'React.js',
            'Redux',
            'MySQL',
          ],
          img_src: '/images/works/theatalk.png',
        },
        {
          work_name: '大学生にいい生活',
          where: 'いい生活株式会社サマーインターンで開発',
          skills: ['Vue.js', 'Vuetify', 'Firebase', '社内API'],
          img_src: '/images/works/e-seikatsu.png',
        },
        {
          work_name: '家具レイアウトレコメンドサービス',
          where: 'GATechnologies株式会社ハッカソンインターンで開発',
          skills: ['Ruby on Rails', 'Bootstrap'],
          img_src: '',
        },
      ],
    };
  },
};
</script>
