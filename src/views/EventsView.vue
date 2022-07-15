<template lang="pug">
.events Events
  Headline(centered-title, centered-text, text-key-title="events.title", text-key-text="events.slug")

  EventCard(
    v-for="event in events",
    :key="$t(event.titleKey)",
    :title-key="event.titleKey",
    :img-path="event.imgPath",
    :text-key="event.textKey"
  )
</template>

<script>
import Headline from "../components/core/Headline.vue";
import EventCard from "../components/EventCard.vue";

export default {
  name: "EventsView",
  components: {
    Headline,
    EventCard,
  },
  data: () => ({
    events: [
      {
        titleKey: "events.eventList.karaoke.title",
        imgPath: "/img/img_6.png",
        textKey: "events.eventList.karaoke.text",
      },
      {
        titleKey: "events.eventList.liveMusic.title",
        imgPath: "/img/img_7.png",
        textKey: "events.eventList.liveMusic.text",
      },
      {
        titleKey: "events.eventList.rent.title",
        imgPath: "/img/img_8.png",
        textKey: "events.eventList.rent.text",
      },
    ],
  }),
};
</script>
