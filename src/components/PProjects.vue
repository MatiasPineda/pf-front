<template>
    <v-container id="projectWrapper">
      <v-row>

        <v-col
          v-for="(app, i) in apps"
          :key="i"
          md="4"
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

<style scoped>
  #projectWrapper{
    padding: 5em;
    min-width: 100vw;
    background: linear-gradient(#2D102C,#000000);
  }

</style>