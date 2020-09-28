<template>
  <v-app-bar class="pa-0" flat absolute color="transparent">
    <v-spacer />
    <contact-logos class="contactLogos" />
  </v-app-bar>
</template>

<script>
  import ContactLogos from "./ContactLogos";
  export default {
    name: "PAppbar",
    components: {ContactLogos}
  }
</script>

<style lang="scss">
  .v-toolbar__content{
    min-height: 6vw;
  }
  .contactLogos {
    padding-right: 3vw;
    * {
      opacity: 0.8;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
</style>