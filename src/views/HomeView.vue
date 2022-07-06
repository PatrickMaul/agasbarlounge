<template lang="pug">
.home
  Headline(centered-title, text-key-title="home.main_title", text-key-text="home.slug")
</template>

<script>
import Headline from "@/components/core/Headline.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Headline,
  },
};
</script>
