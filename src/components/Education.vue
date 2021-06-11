<template>
  <div id="education">
    <p class="text-2xl md:text-4xl my-7 md:my-10 font-serif">Education</p>
    <div
      v-for="school in schools"
      :key="school.name"
      class="text-sm md:text-lg w-3/5 mx-auto"
    >
      <EducationCard
        :school="school.name"
        :start-date="school.startDate"
        :end-date="school.endDate"
        :research-field="school.researchField"
      />
    </div>
  </div>
</template>

<script>
import EducationCard from '../atoms/EducationCard';

export default {
  name: 'Education',
  components: {
    EducationCard,
  },
  data: function () {
    return {
      schools: [
        {
          name: '東京工業大学情報理工学院情報工学系知能情報コース',
          startDate: '2020.4',
          endDate: '2022.3',
          researchField:
            'Bayesian Optimization Algorithm for black-box discrete function',
        },
        {
          name: '明治大学理工学部機械情報工学科',
          startDate: '2016.4',
          endDate: '2020.3',
          researchField: 'control engineering for two-wheeled vehicle',
        },
      ],
    };
  },
};
</script>
