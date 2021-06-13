<template>
  <div class="container">
    <Header @inputValue="(value) => getCharacterByName(value)" />
    <div class="grid" v-if="!loading">
      <Card
        class="card"
        v-for="character in listCharacters"
        :character="character"
        :key="character.id"
      />
    </div>

    <Spinner v-if="loading" />
  </div>
</template>

<script>
import GET_CHARACTERS_BY_PAGE from './graphql/GET_CHARACTER_BY_PAGE.js';
import GET_CHARACTER_BY_NAME from './graphql/GET_CHARACTER_BY_NAME';
import Header from './components/organisms/Header.vue';
import Spinner from './components/atoms/Spinner.vue';
import Card from './components/organisms/Card';

export default {
  components: {
    Header,
    Spinner,
    Card,
  },
  data: () => ({
    listCharacters: [],
    listRequest: [],
    valueInputSearch: '',
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

        this.listCharacters = data.characters.results;
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
        });

        this.listCharacters = data.characters.results;
      } catch (e) {
        this.listCharacters = [];
      }

      this.loading = false;
    },
  },
};
</script>

<style lang="scss">
@import './src/assets/style/scss/_colors.scss';
@import './src/assets/style/scss/_breakpoints.scss';

.container {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
    grid-gap: 1em;
  }
}

@media (max-width: $small-device) {
  .container {
    .grid {
      padding: 0 1em 1em;
    }
  }
}
</style>
