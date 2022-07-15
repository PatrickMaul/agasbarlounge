<template lang="pug">
.card.border-0
  .card-body
    .card-img
      p.title {{ $t(titleKey) }}
      img.img-fluid.rounded.mb-2(:src="imgPath")
      p.body {{ $t(textKey) }}
</template>

<script>
export default {
  name: "EventCard",
  props: {
    titleKey: String,
    imgPath: String,
    textKey: String,
  },
  methods: {
    imgSrc() {
      return this.require(`./img/${this.imgPath}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  aspect-ratio: 1 / 1;
}
</style>
