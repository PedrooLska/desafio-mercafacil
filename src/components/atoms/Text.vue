<template>
  <span v-if="semicon" class="text" :class="`text-${this.textStyle}`"
    >{{ text }}:
  </span>
  <span v-else class="text" :class="`text-${this.textStyle}`">{{ text }} </span>
</template>

<script>
export default {
  name: 'Texto',
  props: {
    text: {
      type: String,
      default: () => '',
    },
    textStyle: {
      type: String,
      default: () => '',
    },
    semicon: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/assets/style/scss/_colors.scss';
@import '~/src/assets/style/scss/_fonts.scss';

.text {
  color: $white-primary;

  &-label {
    font-weight: bold;
    font-family: $font-size-medium;
  }

  &-text {
    font-family: $font-size-medium;
  }

  &-h4 {
    font-size: $font-size-h4;
  }
}
</style>
