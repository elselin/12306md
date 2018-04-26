<template>
  <div>
    <v-toolbar
      dark
      color="primary"
    >
      <v-toolbar-side-icon>
        <router-link to="/result">
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar-side-icon>
      <v-toolbar-title>Zhuhai → Shunde</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>textsms</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>