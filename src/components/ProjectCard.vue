<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="projectCard px-3" >
      <v-row>
        <v-col cols="12" class="">
          <v-img
              align="center"
              :aspect-ratio="16/10"
              class="mx-2"
              :src=app.imagenes[0].image
              contain
          />
        </v-col>

        <v-divider class="ma-1" />


        <v-col cols="12" class="pa-0 align-end">
          <v-card-actions class="pa-0 ma-3">
            <tech-logos v-bind:techList="app.skills_project" class="justify-center" />
          </v-card-actions>
        </v-col>

      </v-row>


      <v-overlay
            v-if="hover"
            :opacity=".95"
            absolute
            color="#023E8A"
          >
        <v-card id="overlayCard" color="transparent" class="" flat light>
          <v-card-title id="overlayTitle" v-text="app.name" class="" />
          <v-card-actions id="overlayMoreInfo">
            <v-btn @click.stop=dialogTrueIfDesktop() class="infoButton overlayButton" >
              Más Información
            </v-btn>
          </v-card-actions>

          <v-row id="overlayUrls"  justify="space-around">
            <v-col cols="4" class="text-center px-0">
              <v-btn
                  v-if="app.live_url"
                  :href="app.live_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="urlButton overlayButton"
              >
                <span>Web</span>
              </v-btn>
            </v-col>

            <v-col cols="4" class="text-center px-0">
              <v-btn
                  v-if="app.repo_url"
                  :href="app.repo_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="urlButton overlayButton"
              >
                <v-img
                    style="filter:invert(100%)"
                    :src="require('@/assets/github.svg')"
                    width="1.2rem"
                    height="1.2rem"
                    class="mx-1"
                />
                <span>Repo</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-overlay>

      <v-dialog id="projectDialog" v-model="dialog" max-width="80vw">
        <dialog-card v-bind:app="app" />
      </v-dialog>

    </v-card>
  </v-hover>
</template>

<script>
  import TechLogos from "./TechLogos";
  import DialogCard from "./DialogCard";

  export default {
    name: "ProjectCard2",
    components: {
      TechLogos,
      DialogCard,
    },
    props: ['app'],
    methods: {
      dialogTrueIfDesktop(){
        this.dialog = true;
        return this.dialog;
      }
    },
    data () {
      return{
        dialog: false,
        overlay: false,
      }
    },
  }
</script>

<style lang="scss">
  .theme--light.v-card.projectCard {
    background-color: #e6fbff;
  }
  .v-overlay .v-overlay__content {
      width: 100%;
      height: 100%;
    }
    .v-card {
      min-width: 100%;
      min-height: 100%;
    }
    #overlayCard {
      padding: 5%;
      *{
        font-family: "Noto Sans JP Bold";
        color: #CAF0F8;
      }

      .v-card__title,
      .v-card__actions {
        width: fit-content;
        text-align: center !important;
        margin: 0 auto;
      }

      #overlayTitle {
        word-break: normal;
        font-size: 1.5em;
        padding:5%;
        border-bottom: 3px solid #48CAE4;
      }

      #overlayMoreInfo{
        padding:4%;
        @media (max-width: 600px ) {
          font-size: 1em;
          padding: 5%;
        }
      }

      #overlayUrls {
        padding: 8%;
        @media (max-width: 600px ) {
          font-size: 1em;
        }
      }

      .overlayButton{
        background-color: #03045E;
        height: 3.5em;
        opacity: 70%;
        min-width: 100%;
        @media (max-width: 600px ) {
          height: 2em;
          font-size: 1em;
          padding: 1%;
        }
      }

    }
    .v-overlay .btn-overlay {
      display: inline-block;
    }
</style>

