<template>
  <v-container id="projectWrapper" class="pa-11">
    <v-row align="stretch">
      <v-col id="projectTitle" cols="12" class="text-center white--text">
          Proyectos
      </v-col>

      <v-col
        v-for="(app, i) in apps"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        class="mx-auto"
      >
        <ProjectCard v-bind:app="app"/>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ProjectCard from "./ProjectCard";

  export default {
    name: "PProjects",
    components: {
      ProjectCard
    },
    data() {
      return {
        apps: [
          {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
                "name": "LinkedIn"
              },
              {
                "name": "PostgreSQL"
              },
              {
                "name": "VueJS"
              },
            ]
          },

            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            // "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },{
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },
            {
            "name": "Flashcards App",
            "slug": "flashcards-app",
            "live_url": "https://github.com/MatiasPineda/flashcards",
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
              }
            ]
          },

        ],
      }
    }
  }
</script>

<style lang="scss">
  #projectWrapper{
    min-width: 100vw;
    background: linear-gradient(#03045E,#030423);
    margin-top: -1px;

    #projectTitle {
      font-size: 3vw;
    }
  }

</style>