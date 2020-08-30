<template>
  <div>
<!--    This is the projects component-->
  </div>
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
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>