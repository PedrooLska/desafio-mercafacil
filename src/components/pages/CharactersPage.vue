<template>
  <div>
    <Header
      @inputValue="(value) => getCharacterByName(value)"
      @orderCardByName="orderCard(listCharacters)"
    />

    <div class="grid" v-if="!loading">
      <Card
        v-for="character in listCharacters"
        :character="character"
        :key="character.id"
      />
    </div>

    <Spinner v-if="loading" />
  </div>
</template>

<script>
import GET_CHARACTERS_BY_PAGE from '../../graphql/GET_CHARACTER_BY_PAGE';
import GET_CHARACTER_BY_NAME from '../../graphql/GET_CHARACTER_BY_NAME';
import Header from '../organisms/Header.vue';
import Spinner from '../atoms/Spinner.vue';
import Card from '../organisms/Card.vue';

export default {
  components: {
    Header,
    Spinner,
    Card,
  },
  data: () => ({
    listCharacters: [],
    loading: false,
    page: 1,
  }),
  created() {
    this.getCharactersByPage(this.page);
  },
  methods: {
    async getCharactersByPage(pageNumber) {
      this.loading = true;

      try {
        const { data } = await this.$apollo.mutate({
          mutation: GET_CHARACTERS_BY_PAGE,
          variables: {
            page: pageNumber,
          },
        });

        const orderCards = this.orderCardByName(data.characters.results);

        this.listCharacters = orderCards;
      } catch (e) {
        this.listCharacters = [];
      }

      this.loading = false;
    },
    async getCharacterByName(valueInput) {
      this.loading = true;

      try {
        const { data } = await this.$apollo.mutate({
          mutation: GET_CHARACTER_BY_NAME,
          variables: {
            name: valueInput,
          },
          loadingKey: 'carlos',
        });

        this.listCharacters = data.characters.results;
      } catch (e) {
        this.listCharacters = [];
      }

      this.loading = false;
    },
    orderCard(listCards) {
      const orderCards = this.orderCardByName(listCards);
      this.listCharacters = orderCards;
    },
    orderCardByName(listCard) {
      return listCard.reverse((oldValue, newValue) => {
        return oldValue.name - newValue.name;
      });
    },
  },
};
</script>

<style lang="scss">
@import './src/assets/style/scss/_colors.scss';
@import './src/assets/style/scss/_breakpoints.scss';

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
  grid-gap: 1em;
}

@media (max-width: $small-device) {
  .grid {
    padding: 0 1em 1em;
  }
}
</style>
