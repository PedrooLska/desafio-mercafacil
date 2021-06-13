<template>
  <div>
    <button class="button" v-if="showButton">
      <i class="button__icon fas fa-arrow-left" />
      <span class="button__text">{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: () => 'NO HAVE TEXT',
    },
    showButton: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/scss/_breakpoints.scss';
@import '../../assets/style/scss/_colors.scss';
@import '../../assets/style/scss/_fonts.scss';
@import '../../assets/style/scss/_includes.scss';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 2em;
  border-radius: 3em;
  background-color: $gray-light;
  border: solid $gray-light 1px;
  color: $white-primary;
  cursor: pointer;
  font-size: $font-size-medium;

  &:hover {
    background-color: $gray-primary;
    color: $red-primary;
    @include transitionAllEaseOut;
  }

  .button__text {
    margin-left: 1em;
  }
}

@media (max-width: $extra-large-device) {
  .button {
    padding: 0.8em;
    .button__text {
      display: none;
    }
  }
}
</style>
