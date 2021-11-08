<template>
  <v-app id="app">
      <Navbar />
      <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/views/assets/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      //
    }
  }
}

</script>