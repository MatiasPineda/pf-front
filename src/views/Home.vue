<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p-intro />
    <v-img
        contain
        max-width="100vw"
        :src="require('@/assets/bg.png')"
    >
      <about-me />

      <p-projects />

    </v-img>

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
