<template>
  <v-card
    class="mx-auto"
  >
    <v-container>
      <v-row>
        <v-col cols="11" sm="5" md="5" class="mx-auto my-auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              class="justify-center"
          >
          </v-img>
        </v-col>
        <v-col cols="11" sm="7" md="7" class="mx-auto">
          <v-card-title >Acerca de mí</v-card-title>
          <v-card-text>
            <p class="pl-2 text-justify" >Actualmente estudiante vespertino y futuro Ingeniero Informático.
               Me interesa el desarrollo web utilizando herramientas como Django, MySQL, entre otras.
              Me siento cómodo con lenguajes como Python, HTML, CSS y Javascript;
              y estoy constantemente trabajando para perfeccionar mis habilidades.
            </p>
          </v-card-text>
          <v-card-title class="pb-1">Lenguajes, Frameworks y Librerías</v-card-title>
          <v-card-actions class="pl-3">
<!--            <tech-logos v-bind:techList="all techs" />  Need to add this to the api  -->
            <v-img class="tech-icon" :src="require('@/assets/html5.svg')" contain max-height="2em" max-width="2em" />
            <v-img class="tech-icon" :src="require('@/assets/css3.svg')" contain max-height="2em" max-width="2em" />
            <v-img class="tech-icon" :src="require('@/assets/js.svg')" contain max-height="2em" max-width="2em" />
            <v-img class="tech-icon" :src="require('@/assets/python.svg')" contain max-height="2em" max-width="2em" />
            <v-img class="tech-icon" :src="require('@/assets/django.svg')" contain max-height="2em" max-width="2em" />
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>



  </v-card>
</template>

<script>
  export default {
    name: "AboutMe",
  }
</script>

<style scoped>
  .tech-icon{
    margin: .4em;
  }
</style>