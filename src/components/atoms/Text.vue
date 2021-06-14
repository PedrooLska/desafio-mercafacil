<template>
  <span class="text">{{ text }}: </span>
</template>

<script>
export default {
  name: 'Texto',
  props: {
    text: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/assets/style/scss/_colors.scss';
@import '~/src/assets/style/scss/_fonts.scss';

.text {
  font-family: $font-size-medium;
  color: $white-primary;
  font-weight: bold;
}
</style>
