<template>
    <v-container>
      <v-row>

        <v-col
          v-for="(app, i) in apps"
          :key="i"
          cols="4"
        >
          <v-card
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            />

            <v-card-title v-text="app.name" />

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-divider/>
            <v-card-actions v-for="(skill, j) in app.skills_project" :key="j">
              <span v-text="skill.name + ' logo'"></span>
            </v-card-actions>
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
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    name: "PProjects",
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

</style>