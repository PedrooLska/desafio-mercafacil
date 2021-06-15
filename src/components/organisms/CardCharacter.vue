<template>
  <div class="card">
    <div class="card__column">
      <cardImage
        class="card__column__image"
        :urlImage="urlImage"
        :alt="'Image Card'"
        :imageArround="true"
      />

      <div class="card__column__description">
        <LabelAndText
          :labelText="'Name'"
          :text="this.character.name"
          :redirectRouter="{
            path: `/detailsCharacter/${character.id}`,
            query: {
              item: character,
            },
          }"
        />
        <LabelAndText :labelText="'Specie'" :text="this.character.species" />
        <LabelAndText :labelText="'Gender'" :text="this.character.gender" />
        <LabelAndText :labelText="'Type'" :text="this.character.type" />
        <LabelAndText
          :labelText="'Origin'"
          :text="this.character.origin.name"
        />
        <LabelAndText
          :labelText="'Location'"
          :text="this.character.location.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import cardImage from '../atoms/Image';
import LabelAndText from '../molecules/LabelAndText.vue';

export default {
  name: 'Card',
  components: {
    cardImage,
    LabelAndText,
  },
  props: {
    character: {
      type: Object,
      default: () => {},
    },
    urlImage: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/assets/style/scss/_includes.scss';
@import '~/src/assets/style/scss/_colors.scss';

.card {
  background-color: $gray-light;
  border-radius: 0.5em;
  color: $white-primary;

  &__column {
    display: flex;

    &__image {
      height: 200px;
    }

    &__description {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 0.5em;
    }
  }
}
</style>
