<template>
  <v-app>
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

export default {
  name: 'App',

  components: {
    // HelloWorld,
    PFooter,
  },

  data: () => ({
    //
  }),
};
</script>
