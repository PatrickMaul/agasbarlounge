<template lang="pug">
.events Events
  Headline(centered-title, centered-text, text-key-title="events.title", text-key-text="events.slug")
</template>

<script>
import Headline from "../components/core/Headline.vue";

export default {
  name: "EventsView",
  components: {
    Headline,
  },
};
</script>
