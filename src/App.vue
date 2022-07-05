<template lang="pug">
.app
  AppBar

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
