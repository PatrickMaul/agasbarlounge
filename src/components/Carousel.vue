<template lang="pug">
.carousel.slide(:id="`${carouselId}`", data-bs-ride="carousel")
  .carousel-inner
    .carousel-item(data-bs-interval="50000", v-for="imgId in imgIds", :class="`${imgId === '1' ? 'active' : ''}`")
      img.h-auto(v-bind:src="getImgSource(imgId)", alt="Eindrücke des Restaurants")

  button.carousel-control-prev(type="button", :data-bs-target="`#${carouselId}`", data-bs-slide="prev")
    span.carousel-control-prev-icon(aria-hidden="true")
    span.visually-hidden Previous
  button.carousel-control-next(type="button", :data-bs-target="`#${carouselId}`", data-bs-slide="next")
    span.carousel-control-next-icon(aria-hidden="true")
    span.visually-hidden Next
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousel",
  props: {
    carouselId: String,
    imgIds: Array,
    basePath: String,
    imgSuffix: String,
  },
  methods: {
    getImgSource(imgId) {
      return `${this.basePath}${imgId}.${this.imgSuffix}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-inner {
  height: 100vh;

  // img {
  //   transform: translateX(-50%);
  // }
}
</style>
