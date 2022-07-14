<template lang="pug">
.home
  .carousel-wrapper.position-relative
    .header.position-absolute.top-50.start-50.translate-middle.text-center
      h1.headline Aga's
      h2.subtitle {{ $t('home.header.subtitle') }}

    Carousel(
      :carousel-id="'home-carousel'",
      :base-path="'./img/img_'",
      :img-suffix="'png'",
      :img-ids="['1', '3', '5', '7', '8', '11', '12']"
    )

  .container
    Headline(centered-title, text-key-title="home.title", text-key-text="home.slug")

    #img-card-container
      ImageCard(v-for="card in imgCards", :key="card.id", :card="card", @click="$router.push('/' + card.route)")
</template>

<script>
import Headline from "@/components/core/Headline.vue";
import Carousel from "@/components/Carousel.vue";
import ImageCard from "../components/ImageCard.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Headline,
    Carousel,
    ImageCard,
  },
  data: () => ({
    imgCards: [
      {
        id: "food",
        classes: [],
        titleKey: "food",
        route: "menu/food",
      },
      {
        id: "drinks",
        classes: [],
        titleKey: "drinks",
        route: "menu/drinks",
      },
      {
        id: "events",
        classes: [],
        titleKey: "events",
        route: "events",
      },
      {
        id: "reserve",
        classes: [],
        titleKey: "reserve",
        route: "reserve",
      },
      {
        id: "contact",
        classes: [],
        titleKey: "contact",
        route: "contact",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  .header {
    z-index: 100;
    color: #eee;
  }
}
</style>
