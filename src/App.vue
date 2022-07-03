<template lang="pug">
.app
  header
    router-link(to="/") Home
    router-link(to="/menu") Speisen und Getränke
    router-link(to="/events") Specials und Events
    router-link(to="/contact") Kontakt

  main.container
    router-view
</template>

<script>
export default {
  name: "App",
};
</script>
