<template lang="pug">
.error.d-flex
  .content.m-auto.text-center
    h1.headline 404
    h2.subtitle PAGE NOT FOUND
</template>

<script>
export default {
  name: "ErrorView",
};
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  width: 100vw;

  .headline {
    font-weight: 200;
    color: red;
  }

  .subtitle {
    font-weight: 300;
  }
}
</style>
