<template>
  <v-container id="projectWrapper" class="pa-11">
    <v-row align="stretch">
      <v-col id="projectTitle" cols="12" class="text-center">
          Proyectos
      </v-col>

      <v-divider />

      <v-col
        v-for="(app, i) in localApps"
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
        const path = 'http://127.0.0.1:8000/api/v1.0/projects/'
        axios.get(path).then((response) => {
          // this.apps = this.localApps.concat(response.data)
          this.apps = response.data
        })
            .catch((error) => {
              console.log(error)
            })
      },

    },
    data() {
      return {
        apps: [],
        localApps: [ //for testing locally
            {
        "name": "Flashcards App",
        "slug": "flashcards-app",
        "live_url": "https://mpv-flashcards.herokuapp.com/",
        "repo_url": "https://github.com/MatiasPineda/flashcards",
        "description": "Simple Aplicación que permite añadir tarjetas con preguntas y respuestas, con el objetivo de posteriormente revisarlas como forma de estudio.",
        "skills_project": [
            {
                "name": "Django"
            },
            {
                "name": "Python"
            },
            {
                "name": "HTML"
            },
            {
                "name": "CSS"
            },
            {
                "name": "Bootstrap"
            }
        ],
        "imagenes": [
            {
                "image": require('@/assets/borrar/flashcards1.png')
            },
            {
                "image": require('@/assets/borrar/flashcards2.png')
            },
            {
                "image": require('@/assets/borrar/flashcards3.png')
            },
            {
                "image": require('@/assets/borrar/flashcards4.png')
            }
        ]
    },
    {
        "name": "Sismos Recientes Chile",
        "slug": "sismos-recientes-chile",
        "live_url": "",
        "repo_url": "https://github.com/MatiasPineda/Recent-Earthquakes-CL",
        "description": "Aplicación simple en PyQt5 que muestra los 15 temblores más recientes en Chile, junto a una imagen de la zona",
        "skills_project": [
            {
                "name": "Python"
            },
            {
                "name": "PyQt5"
            }
        ],
        "imagenes": [
            {
                "image": require('@/assets/borrar/eq1.png')
            },
            {
                "image": require('@/assets/borrar/eq2.png')
            },
            {
                "image": require('@/assets/borrar/eq3.png')
            },
        ]
    },
    {
        "name": "Farmacias de Turno",
        "slug": "farmacias-de-turno",
        "live_url": "",
        "repo_url": "https://github.com/MatiasPineda/farmacia-de-turno",
        "description": "Sitio que entrega las farmacias de turno en la comuna seleccionada.\r\n\r\nSe actualiza a las 13hrs de cada día.",
        "skills_project": [
            {
                "name": "Django"
            },
            {
                "name": "Python"
            },
            {
                "name": "HTML"
            },
            {
                "name": "CSS"
            },
            {
                "name": "Bootstrap"
            },
            {
                "name": "Javascript"
            },
            {
                "name": "VueJS"
            }
        ],
        "imagenes": [
            {
                "image": require('@/assets/borrar/farmacias1.png')
            },
            {
                "image": require('@/assets/borrar/farmacias1.png')
            },
            {
                "image": require('@/assets/borrar/farmacias1.png')
            }
        ]
    }
]
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
      color: #CAF0F8;
    }
  }

</style>