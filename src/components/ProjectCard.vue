<template>
  <v-card @click.stop=dialogTrueIfDesktop() class="fill-height">
<!--    TODO: Check how to align height of cards-->
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    />

    <v-card-title v-text="app.name" />

    <v-card-subtitle v-text="app.description" class="showIfMobile ma-2" />

    <v-divider/>
    <v-card-actions>
      <tech-logos v-bind:techList="app.skills_project" class="justify-center" />
<!--    <tech-logos v-bind:{{app.skills_project}}="app.skills_project" />-->
    </v-card-actions>

    <v-divider class="showIfMobile" />

    <v-card-actions >
<!--      TODO: add condition so it doesn't show if I don't have a url-->
      <v-btn
          :href="app.live_url"
          target="_blank"
          rel="noopener noreferrer"
          text
          class="showIfMobile"
      >
        Web
      </v-btn>

      <v-spacer />

      <v-btn
          :href="app.repo_url"
          target="_blank"
          rel="noopener noreferrer"
          text
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

<!--      <v-btn-->
<!--        icon-->
<!--        @click="show = !show"-->
<!--      >-->
<!--        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>-->
<!--      </v-btn>-->
    </v-card-actions>

    <v-dialog id="projectDialog" v-model="dialog" max-width="80vw">
      <dialog-card v-bind:app="app" />
    </v-dialog>

  </v-card>
</template>

<script>
  // import PProjects from "./PProjects";
  // import TechLogos from "./TechLogos";

  import TechLogos from "./TechLogos";
  import DialogCard from "./DialogCard";
  export default {
    name: "ProjectCard",
    components: {
      DialogCard,
      TechLogos
      // PProjects
    },
    props: ['app'],
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
      dialogTrueIfDesktop(){
        if(window.innerWidth > 960) {
          this.dialog = true;
        }
        return this.dialog;
      }
    }
  }
</script>
<!--TODO: Fix this thing .showIfMobile-->
<style lang="scss">
  /*.showIfMobile {*/
  /*  display: none;*/
  /*  @media (max-width: 960px) {*/
  /*    display: initial;*/
  /*  }*/
  /*}*/

</style>