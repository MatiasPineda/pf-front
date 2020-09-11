<template>
  <div class="contactIcon justify-center">
    <a href="https://www.github.com/MatiasPineda" target="_blank" rel="noopener noreferrer">
      <v-img class="ma-2" :src="require('@/assets/github.svg')" alt="Github" width="3vw"/>
    </a>
    <a href="https://www.linkedin.com/in/matiaspinedavalenzuela/" target="_blank" rel="noopener noreferrer">
      <v-img class="ma-2" :src="require('@/assets/linkedin.svg')" alt="LinkedIn" width="3vw"/>
    </a>
    <a href="">
      <v-img class="ma-2" :src="require('@/assets/resume.png')" alt="Resume" width="3vw"/>
    </a>
  </div>
</template>

<script>
  export default {
    name: "ContactLogos"
  }
</script>

<style lang="scss">
  .contactIcon{
    display: flex;
  }
</style>