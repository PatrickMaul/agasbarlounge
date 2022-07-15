<template lang="pug">
.menu
  router-view
</template>

<script>
import Headline from "../components/core/Headline.vue";

export default {
  name: "MenuView",
  components: {
    Headline,
  },
};
</script>
