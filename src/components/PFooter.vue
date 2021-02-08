<template>
  <v-footer app absolute class="pa-1">
    <v-col class="text-center py-1" cols="12">
      Este portafolio también es un proyecto en progreso!
      <a href="https://github.com/MatiasPineda/pf-front" style="text-decoration: none">Revisa el repositorio aqui</a>
      .
    </v-col>
    <v-col class="text-center py-1" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Matías Pineda</strong>
    </v-col>

  </v-footer>
</template>

<script>
  export default {
    name: "PFooter"
  }
</script>

<style scoped>

</style>