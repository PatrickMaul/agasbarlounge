<template lang="pug">
.app
  AppBar(v-if="$route.name != 'Error'")

  main
    router-view

  AppFooter(v-if="$route.name != 'Error'")
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
