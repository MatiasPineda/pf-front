<template>
  <v-app>
    <p-appbar />
    <v-content style="background-color: white">
      <!-- <HelloWorld /> -->
      <router-view />
    </v-content>
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

  data: () => ({
    //
  }),
};
</script>
