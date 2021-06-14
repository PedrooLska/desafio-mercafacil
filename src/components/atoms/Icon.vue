<template>
  <i class="icon" @click="eventClick" :class="[icon, size, color]"></i>
</template>

<script>
export default {
  name: 'Icon',
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
  methods: {
    eventClick() {
      this.$emit('eventClick');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/assets/style/scss/_colors.scss';

.icon {
  cursor: pointer;
}

.gray-light {
  color: $gray-light;
}
</style>
