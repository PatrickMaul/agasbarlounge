<template lang="pug">
.card.img-card.position-relative.mb-3(:class="[...card.classes]", :id="card.id")
  .title-wrapper.position-absolute.bottom-0.w-100
    h3.position-absolute.bottom-0.start-50.translate-middle-x.subtitle.w-100.text-center {{ $t(`home.cards.${card.titleKey}`) }}
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: none;
}

#img-card-container {
  .img-card {
    width: 100%;
    height: 400px;

    background-position: center;
    background-size: cover;

    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);

    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.6);
    }

    &:hover .title-wrapper {
      color: black;

      background: rgb(255, 255, 255);
      background: -moz-linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 30%);
      background: -webkit-linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 30%);
      background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 30%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF",endColorstr="#FFFFFF",GradientType=1);
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.3);
      border-radius: 6px 6px 0px 0px;

      &:hover {
        box-shadow: 6px 6px 7px 0px rgba(0, 0, 0, 0.4);
      }
    }

    &#food {
      background-image: url("/img/card-food.jpg");
    }

    &#drinks {
      background-image: url("/img/card-drinks.jpg");
    }

    &#events {
      background-image: url("/img/img_3.png");
    }

    &#reserve {
      background-image: url("/img/card-reserve.jpg");
    }

    &#contact {
      background-image: url("/img/card-contact.jpg");
    }

    .title-wrapper {
      height: 200px;
      color: #eee;

      background: rgb(0, 0, 0);
      background: -moz-linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%);
      background: -webkit-linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%);
      background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);

      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
