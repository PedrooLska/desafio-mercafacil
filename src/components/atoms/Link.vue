<template>
  <a class="text" :href="url">{{ text }}</a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    text: {
      type: String,
      default: () => '',
    },
    link: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    url() {
      return this.link ? this.link : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/scss/_colors.scss';
@import '../../assets/style/scss/_fonts.scss';

.text {
  font-family: $font-size-small;
  color: $white-primary;
  text-decoration: none;
  transition: all 0.3s ease-out;
}
</style>
