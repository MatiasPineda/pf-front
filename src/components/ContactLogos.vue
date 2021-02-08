<template>
  <div class="contactIcon justify-center">
    <a href="https://www.github.com/MatiasPineda" target="_blank" rel="noopener noreferrer">
      <v-img class="ma-2" :src="require('@/assets/github.svg')" alt="Github" width="6vh" max-width="9vw"/>
    </a>
    <a href="https://www.linkedin.com/in/matiaspinedavalenzuela/" target="_blank" rel="noopener noreferrer">
      <v-img class="ma-2" :src="require('@/assets/linkedin.svg')" alt="LinkedIn" width="6vh" max-width="9vw"/>
    </a>
    <a v-on:click="showCurriculum">
      <v-img class="ma-2" :src="require('@/assets/resume.png')" alt="Resume" width="6vh" max-width="9vw"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: "ContactLogos",
    methods: {
      showCurriculum: function () {
        const pdf = './pdf/Curriculum_Vitae.pdf';
        window.open(pdf, '_blank');
      }
    }
  }
</script>

<style lang="scss">
  .contactIcon{
    display: flex;
  }
</style>