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
@import '../../assets/style/scss/_colors.scss';
@import '../../assets/style/scss/_fonts.scss';

.text {
  font-family: $font-size-medium;
  color: $white-primary;
  font-weight: bold;
}
</style>
