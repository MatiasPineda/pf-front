<template>
  <v-container id="projectWrapper" class="pa-11">
    <v-row align="stretch">
      <v-col id="projectTitle" cols="12" class="text-center">
          Proyectos
      </v-col>

      <v-divider />

      <v-col
        v-for="(app, i) in apps"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        class="mx-auto"
      >
        <project-card v-bind:app="app" class="fill-height" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ProjectCard from "./ProjectCard";
  import axios from "axios";

  export default {
    name: "PProjects",
    components: {
      ProjectCard,
    },
    methods :{
      getProjects() {
        const path = 'http://api.mpineda.cl/v1.0/projects/'
        axios.get(path).then((response) => {
          this.apps = this.localApps.concat(response.data)
          // this.apps = response.data
        })
            .catch((error) => {
              console.log(error)
            })
      },

    },
    data() {
      return {
        apps: [],
        localApps: [], // placeholder for testing
      }
    },
    created() {
      this.getProjects()
    }
  }
</script>

<style lang="scss">
  #projectWrapper{
    min-width: 100vw;
    background: linear-gradient(#03045E,#030423);
    margin-top: -3px;

    #projectTitle {
      font-family: "Noto Sans JP Bold";
      font-size: 2.2em;
      margin-bottom: 1.2em;
      color: #CAF0F8;
    }
  }

</style>