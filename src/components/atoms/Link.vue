<template>
  <a
    class="text"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: validateRedirectRouterAndHover }"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: 'Link',
  props: {
    text: {
      type: String,
      default: () => '',
    },
    redirectRouter: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    hover: false,
  }),
  computed: {
    validateRedirectRouterAndHover() {
      return this.redirectRouter && this.hover ? true : false;
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
  cursor: pointer;
}

.active {
  transition: all 0.3s ease-out;
  color: red;
}
</style>
