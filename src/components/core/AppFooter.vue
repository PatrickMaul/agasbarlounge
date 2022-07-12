<template lang="pug">
footer.border-top.bg-light
  .container-fluid.d-flex.flex-column
    .img-wrapper.mx-auto.mt-2.mb-3
      a(href="#")
        img(src="../../assets/logos/logo_dark.svg", alt="Logo")

    .opening-hours
      h3.subtitle.underlined(v-html="$t('footer.openingHoursTitle')")
      p.body(v-html="$t('footer.openingHoursText')")
    .address
      h3.subtitle.underlined(v-html="$t('footer.addressTitle')")
      p.body(v-html="$t('footer.addressText')")
</template>

<script>
export default {
  name: " AppFooter",
};
</script>

<style lang="scss" scoped>
footer .container-fluid {
  img {
    width: 200px;
  }
}
</style>
