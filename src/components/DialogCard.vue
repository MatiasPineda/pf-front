<template>
  <v-card height="80vh" class="px-3">
    <v-row class="align-center fill-height">
      <v-col id="imageColumn" cols="12" sm="7" class="pa-0 fill-height">

        <v-carousel class="pa-2 justify-center" height="100%" hide-delimiter-background>
          <v-carousel-item
            v-for="(item,i) in app.imagenes"
            :key="i"
            :src="item.image"
            class="pb-3"

            contain
          ></v-carousel-item>
        </v-carousel>
      </v-col>


      <v-col id="infoColumn" cols="12" sm="5" class="mx-auto fill-height" >

        <v-card-title id="projectTitle" v-text="app.name"></v-card-title>

        <v-card-actions class="pa-0 ma-3">
          <tech-logos v-bind:techList="app.skills_project" class="justify-center" />
        </v-card-actions>

        <v-card-subtitle
            id="projectDescription"
            v-text="app.description"
            class="my-4"
        />
        <v-card-actions >

          <v-btn
              v-if="app.live_url"
              :href="app.live_url"
              target="_blank"
              rel="noopener noreferrer"
              v-text="'WEB'"
              class="showIfMobile"
          />

          <v-spacer />

          <v-btn
              v-if="app.repo_url"
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
      </v-col>

    </v-row>
  </v-card>
</template>

<script>
  import TechLogos from "./TechLogos";

  export default {
    name: "DialogCard",
    props: ['app'],
    components: {
      TechLogos,
    },
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style lang="scss">
 #imageColumn {
   background-color: #0077B6;
   @media (max-width: 600px) {
      height: 85%;
    }
 }
  #infoColumn {
    background-color: #CAF0F8;

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

    #projectTitle{
      font-size: 2em; /* <h1> */
    }


  }
</style>