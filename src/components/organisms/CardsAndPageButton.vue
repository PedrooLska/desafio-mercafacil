<template>
  <div class="cards">
    <div class="cards__grid">
      <Card
        v-for="character in listCharacters"
        :character="character"
        :key="character.id"
      />
    </div>

    <PageButtons
      class="cards__pageButtons"
      @removePageGetCharacters="removePageGetCharacters"
      @addPageGetCharacters="addPageGetCharacters"
    />
  </div>
</template>

<script>
import Card from './Card.vue';
import PageButtons from '../molecules/PageButtons.vue';

export default {
  name: 'CardsAndPageButton',
  components: {
    Card,
    PageButtons,
  },
  props: {
    listCharacters: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removePageGetCharacters() {
      this.$emit('removePageGetCharacters');
    },
    addPageGetCharacters() {
      this.$emit('addPageGetCharacters');
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
    grid-gap: 1em;
  }

  &__pageButtons {
    display: flex;
    justify-content: center;
    margin: 1em 0;

    span {
      margin: 1em 0.5em;
    }
  }
}
</style>
