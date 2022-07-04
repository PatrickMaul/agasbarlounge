<template lang="pug">
.app
  AppBar
  header
    router-link(to="/") Home
    router-link(to="/menu") Speisen und Getränke
    router-link(to="/events") Specials und Events
    router-link(to="/contact") Kontakt

  main.container
    router-view
</template>

<script>
import AppBar from "@/components/core/AppBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>
