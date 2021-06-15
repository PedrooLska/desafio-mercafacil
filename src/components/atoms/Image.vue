<template>
  <img :class="{ imageArround: imageArround }" :src="urlImage" :alt="alt" />
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
      default: () => 'No Have Alt Image',
    },
    imageArround: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>
.imageArround {
  border-radius: 0.5em 0 0 0.5em;
}
</style>
