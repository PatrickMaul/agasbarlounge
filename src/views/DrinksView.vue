<template lang="pug">
.drinks
  Headline(centered-title, centered-text, text-key-title="drinks.title", text-key-text="drinks.slug")
</template>

<script>
import Headline from "../components/core/Headline.vue";

export default {
  name: "DrinksView",
  components: {
    Headline,
  },
};
</script>
