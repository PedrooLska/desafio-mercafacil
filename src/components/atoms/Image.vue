<template>
  <img class="image" :src="urlImage" :alt="alt" />
</template>

<script>
export default {
  name: 'Imagem',
  props: {
    urlImage: {
      type: String,
      default: () => '',
    },
    alt: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: 0.5em 0 0 0.5em;
}
</style>
