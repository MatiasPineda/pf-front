<template>
  <v-container class="pa-0">
    <v-card-actions>
      <v-row v-for="(tech,j) in techList" :key="j">
        <v-col>
          <v-img
              class="tech-icon"
              :src="require('@/assets/' + logo[0][tech.name])"
              contain max-height="2em" max-width="2em"
          />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-container>
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