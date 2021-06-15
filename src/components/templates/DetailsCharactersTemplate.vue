<template>
  <div>
    <Header
      :showButtonBack="true"
      :showSearchBar="false"
      @backPage="backPage"
    />

    <Card :urlImage="character.image" :character="character" />

    <div class="episode__grid">
      <div
        class="episode__card"
        v-for="episode in listEpisodes"
        :key="episode.id"
      >
        <Texto :textStyle="'label'" :text="'Episode'" :semicon="true" />
        <Texto
          :textStyle="'text'"
          :text="`${episode.episode} - ${episode.name}`"
        /><br /><br />

        <Texto :textStyle="'label'" :text="'Characters'" :semicon="true" />

        <div>
          <Imagem
            class="episode__card__image"
            v-for="character in episode.characters"
            :src="character.image"
            :key="character.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../organisms/Header';
import Card from '../organisms/CardCharacter.vue';
import Imagem from '../atoms/Image';
import Texto from '../atoms/Text.vue';

export default {
  components: {
    Header,
    Card,
    Imagem,
    Texto,
  },
  data: () => ({
    character: '',
    listEpisodes: [],
  }),
  created() {
    this.character = this.$router.currentRoute.query.item;
    this.listEpisodes = this.$router.currentRoute.query.item.episode;
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/assets/style/scss/_colors.scss';

.episode__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  margin-top: 3em;
}

.episode__card {
  background-color: $gray-light;
  border-radius: 0.5em;
  padding: 1em;

  &__image {
    width: 30px;
    height: 30px;
    border-radius: 0.5em;
  }
}
</style>
