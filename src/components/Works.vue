<template>
  <div id="works">
    <p class="text-4xl my-10 font-serif">Works</p>
    <div>
      <WorksCard
        :work_name="'オンライン衣類計測サービス'"
        :where="'Vignette&Clarity合同会社のサービス'"
        :skills="['Ruby on Rails', 'BootStrap', 'AWS(S3, RDB, EC2)', 'Flask']"
        :img_path="'/images/works/jeans_measure.png'"
      />

      <WorksCard
        :work_name="'TheaTalk'"
        :where="'楽天株式会社サマーインターンで開発'"
        :skills="['Ruby on Rails', 'Material UI', 'React.js', 'Redux', 'MySQL']"
        :img_path="'/images/works/theatalk.png'"
      />

      <WorksCard
        :work_name="'大学生にいい生活'"
        :where="'いい生活株式会社サマーインターンで開発'"
        :skills="['Vue.js', 'Vuetify', 'Firebase']"
        :img_path="'/images/works/e-seikatsu.png'"
      />

      <WorksCard
        :work_name="'家具レイアウトレコメンドサービス'"
        :where="'GATechnologies株式会社ハッカソンインターンで開発'"
        :skills="['Ruby on Rails', 'Bootstrap']"
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
};
</script>
