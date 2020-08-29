<template>
  <v-footer app absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
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