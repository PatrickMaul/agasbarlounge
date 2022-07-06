<template lang="pug">
footer.border-top.bg-light
  .container-fluid.d-flex.flex-column
    .img-wrapper.mx-auto.mt-2.mb-3
      a(href="#")
        img(src="../../assets/logos/logo_dark.svg", alt="Logo")

    .opening-hours
      h3.subtitle.underlined Öffnungszeiten
      p.body Montag und Dienstag: Ruhetag<br />Mittwoch bis Sonntag: 16 bis 22 Uhr<br />Küche von 17.30 bis 21.30 Uhr
    .address
      h3.subtitle.underlined Adresse
      p.body Montag und Dienstag: Ruhetag<br />Mittwoch bis Sonntag: 16 bis 22 Uhr<br />Küche von 17.30 bis 21.30 Uhr
    .google-map
      iframe(
        width="600",
        height="450",
        style="border: 0",
        loading="lazy",
        allowfullscreen,
        referrerpolicy="no-referrer-when-downgrade",
        src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=AGA's+Barlounge"
      )
</template>

<script>
// import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: " AppFooter",
  methods: {
    //
  },
  // mounted() {
  //   this.initMap();
  // },
};
</script>

<style lang="scss" scoped>
footer .container-fluid {
  img {
    width: 200px;
  }
}
</style>
