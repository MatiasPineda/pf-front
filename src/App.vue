<template>
  <v-app>
    <p-appbar  />
    <v-main>
      <!-- <HelloWorld /> -->
      <router-view />
    </v-main>
    <p-footer />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import PFooter from "./components/PFooter";
import PAppbar from "./components/PAppbar";

export default {
  name: 'App',

  components: {
    // HelloWorld,
    PAppbar,
    PFooter,
  },
  meta: {
    title: 'Matías Pineda',
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "./scss/app";
</style>
