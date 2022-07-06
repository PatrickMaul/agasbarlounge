<template lang="pug">
.headline
  h1.title(:class="[centeredTitle ? 'text-center' : 'text-left']") {{ $t(`${textKeyTitle}`) }}
  p.body(:class="[centeredText ? 'text-center' : 'text-left']") {{ $t(`${textKeyText}`) }}
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headline",
  props: {
    centeredTitle: Boolean,
    centeredText: Boolean,
    textKeyTitle: String,
    textKeyText: String,
  },
};
</script>
