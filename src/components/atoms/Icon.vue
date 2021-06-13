<template>
  <i class="icon" :class="[icon, size, color]"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: () => '',
    },
    size: {
      type: String,
      default: () => '',
    },
    color: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/scss/_colors.scss';

.icon {
  cursor: pointer;
}

.gray-light {
  color: $gray-light;
}
</style>
