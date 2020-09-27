<template>
  <v-card
      id="aboutMeCard"
      class="mx-auto"
  >
      <v-row>
        <v-col cols="12" sm="5" md="5" xl="5" class="mx-auto my-auto">
          <v-avatar size="90%" rounded class="ma-6">
            <img
                :src="require('@/assets/avatar.png')"
                id="aboutMeImage"
            >

          </v-avatar>
        </v-col>
        <v-col cols="12" sm="7" md="7" class="mx-auto">
          <v-card-title id="aboutMeTitle" >Acerca de mí</v-card-title>
          <v-card-text id="aboutMeText">
            <p class="pl-2 text-justify" >Actualmente estudiante vespertino y futuro Ingeniero Informático.
               Me interesa el desarrollo web utilizando herramientas como Django, MySQL, entre otras.
              Me siento cómodo con lenguajes como Python, HTML, CSS y Javascript;
              y estoy constantemente trabajando para perfeccionar mis habilidades.
            </p>
          </v-card-text>
          <v-card-title id="aboutMeTech" class="pb-1">Lenguajes, Frameworks y Librerías</v-card-title>
          <v-card-actions class="pl-3">
            <tech-logos v-bind:techList="allTech" />
<!--            <tech-logos v-bind:techList="all techs" />  Need to add this to the api  -->
<!--            <v-img class="tech-icon" :src="require('@/assets/html5.svg')" contain max-height="2em" max-width="2em" />-->
<!--            <v-img class="tech-icon" :src="require('@/assets/css3.svg')" contain max-height="2em" max-width="2em" />-->
<!--            <v-img class="tech-icon" :src="require('@/assets/js.svg')" contain max-height="2em" max-width="2em" />-->
<!--            <v-img class="tech-icon" :src="require('@/assets/python.svg')" contain max-height="2em" max-width="2em" />-->
<!--            <v-img class="tech-icon" :src="require('@/assets/django.svg')" contain max-height="2em" max-width="2em" />-->
          </v-card-actions>
        </v-col>
      </v-row>

  </v-card>
</template>

<script>
  import TechLogos from "./TechLogos";

  export default {
    name: "AboutMe",
    components: {
      TechLogos,
    },
    data () {
      return {
        allTech: [
            {
              "name": "Django"
            },
            {
              "name": "Python"
            },
            {
              "name": "HTML"
            },
            {
              "name": "CSS"
            },
            {
              "name": "LinkedIn"
            },
            {
              "name": "PostgreSQL"
            },
            {
              "name": "VueJS"
            },
        ]
      }
    }
  }
</script>

<style lang="scss">
  #aboutMeCard {
    background-color: #e6fbff;

    #aboutMeImage {
      border-radius: 100%;
      border: 4px solid #48CAE4;
    }

    * {
      font-size: calc(16px + (64 - 16) * ((100vw - 768px) / (3840 - 768)));
      line-height: 1.2em;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
      @media screen and (min-width: 3840px) {
        font-size: 64px;
      }
    }

    #aboutMeTitle {
      font-size: 2em; /* <h1> */
    }

    #aboutMeTech {
      font-size: 1.5em; /* <h2> */
    }
  }

  .tech-icon{
    margin: .4em;
  }
</style>