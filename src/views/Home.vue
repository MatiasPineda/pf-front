<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p-intro />
    <v-img
        id="aboutMeSection"
        :src="require('@/assets/bg.png')"
        class="align-center"
    >
      <about-me />
      <div class="text-center" id="projectsBtn">
        <v-btn
            rounded
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
  #projectsBtn {

    margin-top: 1em;
    *{
      height: 2em;
      font-size: 1em;
      color: #03045E;
      background-color: #e6fbff;
      border: 2px solid #48CAE4;
    }

  }

</style>
