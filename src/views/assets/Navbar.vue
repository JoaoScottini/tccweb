<template>
  <nav>
    <v-toolbar app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Equipe Lovelace</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat-color="grey">
        <span>Deslogar</span>
        <v-icon right>mdi-cancel</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app temporary class="indigo">
      <p>teste</p>
    </v-navigation-drawer>

  </nav>
</template>

<script>
  export default{
    data() {
      return{
        drawer: false
      }
    }
  }
</script>