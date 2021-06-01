<template>
  <div id="works">
    <p class="text-2xl md:text-4xl my-5 md:my-10 font-serif">Works</p>
    <div v-for="work in works" v-bind:key="work.work_name">
      <WorksCard
        :work_name="work.work_name"
        :where="work.where"
        :skills="work.skills"
        :img_path="work.img_src"
        :code_url="work.code_url"
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
          work_name: 'Duo3.4',
          where: '単語帳Duo3.0の学習アプリ',
          skills: ['Python(Flask)', 'Next.js', 'Redux'],
          img_src: '/images/works/up_coming.png',
          code_url: 'https://github.com/kent0304/duo34',
        },
        {
          work_name: 'atcoder notification bot',
          where: '研究室競プロ部SlackチャンネルのBot',
          skills: ['Python', 'A3RT'],
          img_src: '/images/works/atcoder_notification.png',
          code_url:
            'https://github.com/tomoyuki-hiranuma/atcoder-slack-notification',
        },
        {
          work_name: 'オンライン衣類計測サービス',
          where: 'Vignette&Clarity合同会社の試作サービス',
          skills: ['Ruby on Rails', 'BootStrap', 'AWS(S3, RDB, EC2)', 'Flask'],
          img_src: '/images/works/jeans_measure.png',
          code_url: '',
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
          code_url: 'https://github.com/shortintern2020-B-frontier/TeamB',
        },
        {
          work_name: '大学生にいい生活',
          where: 'いい生活株式会社サマーインターンで開発',
          skills: ['Vue.js', 'Vuetify', 'Firebase', '社内API'],
          img_src: '/images/works/e-seikatsu.png',
          code_url: '',
        },
        {
          work_name: '家具レイアウトレコメンドサービス',
          where: 'GATechnologies株式会社ハッカソンインターンで開発',
          skills: ['Ruby on Rails', 'Bootstrap'],
          img_src: '/images/works/no_image.png',
          code_url: '',
        },
      ],
    };
  },
};
</script>
