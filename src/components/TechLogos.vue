<template>
  <v-row id="techi" >
    <v-avatar
              tile
              v-for="(tech,j) in techList" :key="j"
              class="tech-avatar mx-1 mx-md-1 mx-xl-3 "
              v-bind:size="avatarSize"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-img

            v-bind="attrs"
            v-on="on"
            class="tech-icon"
            :src="require('@/assets/' + logo[0][tech.name])"
            contain
          />
        </template>
        <span>{{tech.name}}</span>
      </v-tooltip>
    </v-avatar>
  </v-row>
</template>

<script>
  export default {
    name: "TechLogos",
    props: ["techList"],
    data() {
      return {
        avatarSize: "2em",
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
          "PyQt5": "Python_and_Qt.svg",
        }]
      }
    },
    methods: {
      onResize: function(){
        this.avatarSize = "2.5em"
        if (screen.width <=600) {
          this.avatarSize = "2.5em"
        }
      },
      showLogo: function(logoname) {
        return ("@/assets/" + this.logo[0][logoname])
      }
    }
  }
</script>

<style lang="scss">
</style>