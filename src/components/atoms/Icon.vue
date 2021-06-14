<template>
  <i
    class="icon"
    @click="eventClick"
    :class="[icon, createClassSize, createClassColor]"
  />
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
  computed: {
    createClassSize() {
      return `fa-${this.size}`;
    },
    createClassColor() {
      return `icon${this.color}`;
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
@import '~/src/assets/style/scss/_includes.scss';

.icon {
  cursor: pointer;

  &-gray-light {
    color: $gray-light;
  }

  &-red-primary {
    color: $red-primary;
  }

  &:hover {
    color: $white-primary;
    @include transitionAllEaseOut;
  }
}
</style>
