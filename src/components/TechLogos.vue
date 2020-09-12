<template>
  <v-row id="techi">
    <v-col v-for="(tech,j) in techList" :key="j"
           cols="1"
           class="pa-0 mx-1 mx-md-1 mx-xl-3"
    >
    <v-img
        class="tech-icon"
        :src="require('@/assets/' + logo[0][tech.name])"
        contain height="8vh" width="8vh"

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