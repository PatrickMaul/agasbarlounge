<template lang="pug">
.menu
  Headline(centered-title, centered-text, text-key-title="menu.title", text-key-text="menu.slug")
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
