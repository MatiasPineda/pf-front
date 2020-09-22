<template>
  <v-hover v-slot:default="{ hover }">
    <v-card id="projectCard">
      <v-row>
        <v-col cols="12" class="">
          <v-img
              class="mx-2"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          />
        </v-col>

        <v-divider class="ma-1" />

        <v-col cols="12" class="pa-0">
          <v-card-actions class="pa-0 ma-3">
            <tech-logos v-bind:techList="app.skills_project" class="justify-center" />
          </v-card-actions>
        </v-col>

      </v-row>


      <v-overlay
            v-if="hover"
            :opacity=".95"
            absolute
          >
        <v-card id="overlayCard" color="transparent" class="">
<!--          añadir flat cuando esté arreglado el tamaño-->
          <v-card-title v-text="app.name" />
          <v-card-actions>
            <v-btn @click.stop=dialogTrueIfDesktop()>
              Más Información
            </v-btn>
          </v-card-actions>

          <v-card-actions >
            <v-btn
                :href="app.live_url"
                target="_blank"
                rel="noopener noreferrer"
                v-text="'WEB'"
                class="showIfMobile"
            />

            <v-spacer />

            <v-btn
                :href="app.repo_url"
                target="_blank"
                rel="noopener noreferrer"
                class="showIfMobile"
            >
              <v-img
                  :src="require('@/assets/github.svg')"
                  width="1.2rem"
                  class="mx-1"
              />
               <v-spacer />
              Repo
            </v-btn>
          </v-card-actions>
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
  #projectCard {
    background-color: #e6fbff;
  }
</style>

