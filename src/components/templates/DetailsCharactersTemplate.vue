<template>
  <div>
    <Header
      :showButtonBack="true"
      :showSearchBar="false"
      @backPage="backPage"
    />
  </div>
</template>

<script>
import Header from '../organisms/Header.vue';

export default {
  components: {
    Header,
  },
  methods: {
    backPage() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
