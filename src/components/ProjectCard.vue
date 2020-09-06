<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    />

    <v-card-title v-text="app.name" />

    <v-card-subtitle v-text="app.description">
    </v-card-subtitle>

    <v-divider/>
    <tech-logos v-bind:techList="app.skills_project" />
<!--    <tech-logos v-bind:{{app.skills_project}}="app.skills_project" />-->
    <v-divider/>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  // import PProjects from "./PProjects";
  // import TechLogos from "./TechLogos";

  import TechLogos from "./TechLogos";
  export default {
    name: "ProjectCard",
    components: {
      TechLogos
      // TechLogos,
      // PProjects
    },
    props: ['app'],
  }
</script>

<style scoped>

</style>