<template>
  <v-card height="80vh">
    <v-row class="align-center fill-height">
      <v-col id="imageColumn" cols="7" class="fill-height pa-0">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          max-width="90%"
          max-height="70%"
          contain
          class="mt-9 mx-auto"
        />
      </v-col>
      <v-col cols="5" class="mx-auto fill-height" >

        <v-card-title class="headline" v-text="app.name"></v-card-title>

        <v-card-subtitle
            v-text="app.description"
            class="my-4"
        />
        <v-card-actions>
          <v-spacer />

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
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
  }
</script>

<style lang="scss">
 #imageColumn {
   background-color: gray;
 }
</style>