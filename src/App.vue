<template lang="pug">
.app
  AppBar

  main
    router-view

  AppFooter
</template>

<script>
import AppBar from "@/components/core/AppBar.vue";
import AppFooter from "@/components/core/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppBar,
    AppFooter,
  },
};
</script>
