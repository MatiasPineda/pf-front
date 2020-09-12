<template>
    <v-container id="introWrapper" fill-height>

        <v-row class="white--text">
          <v-col id="introName" cols="12" class="text-center">
              Matías Pineda
          </v-col>
          <v-col id="introTitle" cols="12" class="introSubtitle text-center py-0">
              Desarrollador Fullstack
          </v-col>
          <v-col id="introPlace" cols="12" class="introSubtitle text-center pt-0">
            Santiago, Chile
          </v-col>
          <v-col id="contactLogos" cols="12">
            <contact-logos />
          </v-col>
          <v-col id="introArrow" cols="12" class="text-center">
            <v-icon
                size="6vh"
                color="white"
                @click="$vuetify.goTo(target, options)"
            >
              {{ icons.mdiChevronDown }}
            </v-icon>
          </v-col>

        </v-row>
    </v-container>
</template>

<script>
  import { mdiChevronDown } from '@mdi/js';
  import ContactLogos from "./ContactLogos";
  export default {
    name: "PIntro",
    components: {ContactLogos},
    data () {
      return {
        icons: {
          mdiChevronDown,
        },
      }
    },
    computed: {
      target () {
        return '#aboutMeSection'
      },
      options () {
        return {
          duration: 900,
          offset: 0,
          easing: 'easeInOutCubic',
        }
      },
    }
  }
</script>

<style lang="scss">
  #introWrapper{
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(#0096C7,#ADE8F4);

    #introName{
      font-size: 6vw;
      font-family: "Noto Sans JP Bold";
      @media (max-width: 600px) {
        font-size: 11vw;
      }
    }

    .introSubtitle{
      font-size: 3vw;
      @media (max-width: 600px) {
        font-size: 6vw;
      }
    }

    #introArrow {
      animation: down-arrow-bounce 1s ease-in-out infinite;
    }

    #contactLogos {
      filter: invert(100%);
      display: none;
      @media (max-width: 600px) {
        display: initial;
      }
    }
  }

  @keyframes down-arrow-bounce {
    0%, 100%  { transform: translateY(0); }
    50%       { transform: translateY(10px); }
  }



</style>


