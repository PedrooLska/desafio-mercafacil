<template>
  <button class="button" @click="eventClick">
    <div v-if="positionIcon === 'left'">
      <i class="button__icon" :class="icon" />
      <span class="button__text" :class="validatePositionIcon">{{ text }}</span>
    </div>

    <div v-else>
      <span class="button__text" :class="validatePositionIcon">{{ text }}</span>
      <i class="button__icon" :class="icon" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: () => '',
    },
    icon: {
      type: String,
      default: () => '',
    },
    positionIcon: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    validatePositionIcon() {
      return this.positionIcon === 'left' ? '--icon-left' : '--icon-right';
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
@import '~/src/assets/style/scss/_breakpoints.scss';
@import '~/src/assets/style/scss/_colors.scss';
@import '~/src/assets/style/scss/_fonts.scss';
@import '~/src/assets/style/scss/_includes.scss';

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

  .--icon-left {
    margin-left: 1em;
  }

  .--icon-right {
    margin-right: 1em;
  }
}

@media (max-width: $extra-large-device) {
  .button {
    padding: 0.8em;
    &__text {
      display: none;
    }
  }
}
</style>
