<template>
  <div class="description">
    <LabelAndText
      :labelText="'Nome'"
      :text="this.character.name"
      :redirectRouter="`/detailsCharacter/${this.character.id}`"
    />
    <LabelAndText :labelText="'Espécie'" :text="this.character.species" />
    <LabelAndText :labelText="'Gênero'" :text="this.character.gender" />
    <LabelAndText :labelText="'Tipo'" :text="this.character.type" />
    <LabelAndText :labelText="'Origem'" :text="this.character.origin.name" />
    <LabelAndText :labelText="'Tipo'" :text="this.character.location.name" />
  </div>
</template>

<script>
import LabelAndText from './LabelAndText';

export default {
  name: 'CardDescription',
  components: {
    LabelAndText,
  },
  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
