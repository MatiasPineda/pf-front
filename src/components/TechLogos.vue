<template>
  <v-row id="techi">
    <v-col v-for="(tech,j) in techList" :key="j"
           cols="2"
           class="ma-1 pa-0"
    >
    <v-img
        class="tech-icon mx-auto mx-1"
        :src="require('@/assets/' + logo[0][tech.name])"
        contain max-width="2rem" max-height="2rem"

      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "TechLogos",
    props: ["techList"],
    data() {
      return {
        logo : [{
          "Django": "django.svg",
          "Bootstrap": "bootstrap_logo.svg",
          "CSS": "css3.svg",
          "Github": "github.svg",
          "HTML": "html5.svg",
          "Javascript": "js.svg",
          "LinkedIn": "linkedin.svg",
          "PostgreSQL": "postgresql.svg",
          "Python": "python.svg",
          "SQLite": "sqlite.svg",
          "VueJS": "vue.svg",
        }]
      }
    },
    methods: {
      showLogo: function(logoname) {
        return ("@/assets/" + this.logo[0][logoname])
      }
    }
  }
</script>

<style scoped>

</style>