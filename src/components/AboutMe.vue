<template>
  <div id="aboutMeContainer" class="mx-auto">
    <v-card
      id="aboutMeCard"
  >
      <v-row class="px-3">
        <v-col cols="12" sm="5" md="5" xl="5" class="mx-auto my-auto">
          <v-avatar size="90%" rounded class="ma-6">
            <img
                :src="require('@/assets/avatar.png')"
                id="aboutMeImage"
            >

          </v-avatar>
        </v-col>
        <v-col cols="12" sm="7" md="7" class="mx-auto">
          <v-card-title id="aboutMeTitle" class="underlineSubtitle" >Acerca de mí</v-card-title>
          <v-card-text id="aboutMeText" class="pa-0 mb-4">
            <p class="pa-4 text-justify" >Actualmente estudiante vespertino y futuro Ingeniero Informático.
               Me interesa el desarrollo web utilizando herramientas como Django, MySQL, entre otras.
              Me siento cómodo con lenguajes como Python, HTML, CSS y Javascript;
              y estoy constantemente trabajando para perfeccionar mis habilidades.
            </p>
          </v-card-text>

          <v-card-title id="aboutMeTech" class="underlineSubtitle">Lenguajes, Frameworks y Librerías</v-card-title>
          <tech-logos id="aboutMeTechLogos" class="pa-3" v-bind:techList="allTech" />

        </v-col>
      </v-row>

  </v-card>
  </div>

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
              "name": "Javascript"
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
  #aboutMeContainer{
    text-align: center;
    width: 80vw;
    max-width: 1600px;

    #aboutMeCard {
      background-color: #e6fbff;
      color: #030423;

      #aboutMeImage {
        border-radius: 100%;
        border: 4px solid #48CAE4;
      }

      #aboutMeTitle {
        font-size: 1.5em; /* <h1> */
      }

      #aboutMeTech {
        min-width: 100%;
        font-size: 1.5em; /* <h2> */
      }

      .underlineSubtitle {
        font-family: "Noto Sans JP Medium";
        border-bottom: 3px solid #48CAE4;
        margin-bottom: 10px;
      }
    }
  }



  .tech-icon{
    margin: .4em;
  }
</style>