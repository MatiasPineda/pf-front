<template>
  <v-app-bar class="pa-0" flat absolute color="transparent">
    <v-spacer />
    <a href="https://www.github.com/MatiasPineda" target="_blank" rel="noopener noreferrer">
      <v-img class="ma-2" :src="require('@/assets/github.svg')" alt="Github" max-height="2rem" max-width="2rem"/>
    </a>
    <a href="https://www.linkedin.com/in/matiaspinedavalenzuela/" target="_blank" rel="noopener noreferrer">
      <v-img class="ma-2" :src="require('@/assets/linkedin.svg')" alt="LinkedIn" max-height="2rem" max-width="2rem"/>
    </a>
    <a href="">
      <v-img class="ma-2" :src="require('@/assets/resume.png')" alt="Resume" max-height="2rem" max-width="2rem"/>
    </a>
  </v-app-bar>
</template>

<script>
  export default {
    name: "PAppbar"
  }
</script>

<style scoped>

</style>