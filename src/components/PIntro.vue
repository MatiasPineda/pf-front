<template>
    <v-container id="introWrapper" fill-height>

        <v-row class="white--text">
          <v-col cols="12">
              Matías Pineda
          </v-col>
          <v-col cols="12">
            Santiago, Chile
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: "PIntro"
  }
</script>

<style scoped>
  #introWrapper{
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(#0990cc,#FEDAC4);
    overflow: hidden;
  }
</style>


