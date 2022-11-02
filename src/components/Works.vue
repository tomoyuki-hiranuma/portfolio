<template>
  <div id="works">
    <p class="text-2xl md:text-4xl my-5 md:my-10 font-serif">Works</p>
    <div v-for="work in works" :key="work.workName">
      <WorksCard
        :workName="work.workName"
        :where="work.where"
        :skills="work.skills"
        :imgPath="work.imgSrc"
        :codeUrl="work.codeUrl"
        :alt="work.alt"
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
          workName: 'cre8ter.zone',
          where: '株式会社inprogのサービス。設計開発全般担当',
          skills: [
            'Next.js',
            'Typescript',
            'ChakraUI',
            'Hasura',
            '※掲載許可あり',
          ],
          imgSrc: '/images/works/cre8terzone.png',
          codeUrl: null,
          alt: 'cre8ter.zone',
        },
        {
          workName: 'Numa Blog',
          where: '自作ブログ',
          skills: ['Next.js', 'Typescript', 'ChakraUI'],
          imgSrc: '/images/works/numa_blog.png',
          codeUrl: 'https://github.com/tomoyuki-hiranuma/blog-client',
          alt: 'Numa Blog',
        },
        {
          workName: 'atcoder notification bot',
          where: '研究室競プロ部SlackチャンネルのBot',
          skills: ['Python', 'A3RT'],
          imgSrc: '/images/works/atcoder_notification.png',
          codeUrl:
            'https://github.com/tomoyuki-hiranuma/atcoder-slack-notification',
          alt: 'atcoder',
        },
        {
          workName: 'オンライン衣類計測サービス',
          where: 'Vignette&Clarity合同会社の試作サービス',
          skills: ['Ruby on Rails', 'BootStrap', 'AWS(S3, RDB, EC2)', 'Flask'],
          imgSrc: '/images/works/jeans_measure.png',
          codeUrl: '',
          alt: 'jeans',
        },
        {
          workName: 'TheaTalk',
          where: '楽天株式会社サマーインターンで開発',
          skills: [
            'Ruby on Rails',
            'Material UI',
            'React.js',
            'Redux',
            'MySQL',
          ],
          imgSrc: '/images/works/theatalk.png',
          codeUrl: 'https://github.com/shortintern2020-B-frontier/TeamB',
          alt: 'theatalk',
        },
        {
          workName: '大学生にいい生活',
          where: 'いい生活株式会社サマーインターンで開発',
          skills: ['Vue.js', 'Vuetify', 'Firebase', '社内API'],
          imgSrc: '/images/works/e-seikatsu.png',
          codeUrl: '',
          alt: 'propertySearch',
        },
        {
          workName: '家具レイアウトレコメンドサービス',
          where: 'GATechnologies株式会社ハッカソンインターンで開発',
          skills: ['Ruby on Rails', 'Bootstrap'],
          imgSrc: '/images/works/no_image.png',
          codeUrl: '',
          alt: 'layout',
        },
      ],
    };
  },
};
</script>
