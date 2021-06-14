<template>
  <div>
    <Header
      :showInput="false"
      :showButtonBack="true"
      :showOrderBy="false"
      @inputValue="(value) => getCharacterByName(value)"
      @orderCardByName="orderCard(listCharacters)"
    />
  </div>
</template>

<script>
import Header from '../organisms/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
