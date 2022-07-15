<template lang="pug">
.food-menu
  Headline(centered-title, centered-text, text-key-title="menu.title", text-key-text="menu.slug")

  .vstack.gap-3
    img.img-fluid(src="/img/menu_food_1.png")
    img.img-fluid(src="/img/menu_food_2.png")
</template>

<script>
import Headline from "../../components/core/Headline.vue";

export default {
  name: "FoodMenu",
  components: {
    Headline,
  },
};
</script>
