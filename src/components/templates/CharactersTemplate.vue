<template>
  <div class="wrapper">
    <Header
      :showButtonBack="false"
      :showSearchBar="true"
      @inputValue="(value) => getCharacterByName(value)"
      @orderCardByName="orderCard(listCharacters)"
    />

    <div v-if="!loading">
      <CardsAndPageButtons
        :listCharacters="listCharacters"
        @removePageGetCharacters="removePageGetCharacters"
        @addPageGetCharacters="addPageGetCharacters"
      />
    </div>

    <Spinner v-if="loading" />
  </div>
</template>

<script>
import GET_CHARACTERS_BY_PAGE from '../../graphql/GET_CHARACTER_BY_PAGE';
import GET_CHARACTER_BY_NAME from '../../graphql/GET_CHARACTER_BY_NAME';
import Header from '../organisms/Header.vue';
import CardsAndPageButtons from '../organisms/CardsAndPageButton.vue';
import Spinner from '../atoms/Spinner.vue';

export default {
  name: 'CharactersPage',
  components: {
    Header,
    CardsAndPageButtons,
    Spinner,
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
    async getCharacterByName(inputValue) {
      this.loading = true;

      try {
        const { data } = await this.$apollo.mutate({
          mutation: GET_CHARACTER_BY_NAME,
          variables: {
            name: inputValue,
          },
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
    removePageGetCharacters() {
      this.page--;
      this.getCharactersByPage(this.page);
    },
    addPageGetCharacters() {
      this.page++;
      this.getCharactersByPage(this.page);
    },
  },
};
</script>

<style lang="scss">
@import '~/src/assets/style/scss/_colors.scss';
@import '~/src/assets/style/scss/_breakpoints.scss';

@media (max-width: $small-device) {
  .wrapper {
    padding: 0 1em 0 1em;
  }
}
</style>
