<template>
  <v-card height="80vh" class="px-3">
    <v-row class="align-center fill-height">
      <v-col id="imageColumn" cols="12" sm="7" class="pa-0 fill-height">

        <v-carousel class="pa-2 justify-center" height="100%" hide-delimiter-background>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            class="pb-3"

            contain
          ></v-carousel-item>
        </v-carousel>

<!--        <v-img-->
<!--          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"-->
<!--          max-width="90%"-->
<!--          max-height="70%"-->
<!--          contain-->
<!--          class="mt-9 mx-auto"-->
<!--        />-->
      </v-col>


      <v-col id="infoColumn" cols="12" sm="5" class="mx-auto fill-height" >

        <v-card-title class="headline" v-text="app.name"></v-card-title>

        <v-card-subtitle
            v-text="app.description"
            class="my-4"
        />
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
      </v-col>

    </v-row>
  </v-card>
</template>

<script>
  export default {
    name: "DialogCard",
    props: ['app'],
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
  }
</style>