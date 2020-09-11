<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p-intro />
    <v-img
        id="aboutMeSection"
        :src="require('@/assets/bg.png')"
        class="align-center pa-6 pa-md-15 "
    >
      <about-me />
      <div class="text-center">
        <v-btn
            id="projectsBtn"
            v-text="'MIRA MI TRABAJO'"
            class="ma-3 mx-auto mb-9"
            @click="$vuetify.goTo('#projectWrapper', {duration: 900,offset: 0,easing: 'easeInOutCubic'})"
        />
      </div>

    </v-img>
    <p-projects/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "../components/AboutMe";
import PProjects from "../components/PProjects";
import PIntro from "../components/PIntro";

export default {
  name: 'Home',
  components: {
    PIntro,
    AboutMe,
    PProjects,
  },
}
</script>

<style lang="scss">

</style>
