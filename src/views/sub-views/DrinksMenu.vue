<template lang="pug">
.drinks-menu
  Headline(centered-title, centered-text, text-key-title="drinks.title", text-key-text="drinks.slug")

  .vstack.gap-3
    img.img-fluid(src="/img/menu_drinks_1.png")
    img.img-fluid(src="/img/menu_drinks_2.png")
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
