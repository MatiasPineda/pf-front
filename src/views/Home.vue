<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p-intro />
    <v-img
        position="top"
        contain
        max-width="100vw"
        max-height="1080px"
        :src="require('@/assets/bg.png')"
        class="align-center"
    >
      <about-me/>
    </v-img>
    <p-projects />
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
