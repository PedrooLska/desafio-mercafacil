<template>
  <div class="card">
    <div class="card__column">
      <cardImage
        class="card__column__image"
        :urlImage="character.image"
        :alt="'Image Card'"
      />

      <div class="card__column__description">
        <cardDescription :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import cardImage from '../atoms/Image';
import cardDescription from '../molecules/CardDescription';

export default {
  components: {
    cardImage,
    cardDescription,
  },
  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/scss/_includes.scss';
@import '../../assets/style/scss/_colors.scss';

.card {
  background-color: $gray-light;
  border-radius: 0.5em;
  color: $white-primary;

  .card__column {
    display: flex;

    .card__column__image {
      height: 200px;
    }

    .card__column__description {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 0.5em;
    }
  }
}
</style>
