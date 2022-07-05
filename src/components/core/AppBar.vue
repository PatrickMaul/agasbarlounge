<template lang="pug">
header.navbar.navbar-expand-lg.bg-light
  .container-fluid
    a.navbar-brand(href="#")
      img(src="../../assets/logos/logo_dark.svg", alt="Logo", height="60px", width="100px")
    button.navbar-toggler.rounded-pill.border-0.position-relative.me-2(type="button")
      i.bi.bi-list.position-absolute.top-50.start-50.translate-middle
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style lang="scss" scoped>
header {
  .navbar-toggler {
    width: 45px;
    height: 45px;

    i {
      font-size: 35px;
    }
  }
}
</style>
