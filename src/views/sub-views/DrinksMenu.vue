<template lang="pug">
.drinks-menu
  Headline(centered-title, centered-text, text-key-title="drinks.title", text-key-text="drinks.slug")
</template>

<script>
import Headline from "../../components/core/Headline.vue";

export default {
  name: "DrinksMenu",
  components: {
    Headline,
  },
};
</script>
