<template>
    <v-container id="introWrapper" class="ma-0 mr-0" fill-height align-center>

        <v-row align="center" justify="center" class="white--text">
          <v-col cols="12">
            <div>
              Matías Pineda
            </div>
            <div>
              Santiago, Chile
            </div>
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


