<template>
  <input
    class="input"
    type="text"
    @input="(event) => changeInputValue(event.target.value)"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    changeInputValue(inputValue) {
      this.$emit('inputValue', inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/assets/style/scss/_breakpoints.scss';
@import '~/src/assets/style/scss/_colors.scss';
@import '~/src/assets/style/scss/_fonts.scss';

.input {
  width: 250px;
  padding: 0.6em 1em;
  border-radius: 3em;
  background-color: $gray-light;
  border: solid $gray-light 1px;
  color: $white-primary;
  font-size: $font-size-medium;

  &:hover {
    background-color: $gray-primary;
  }

  &::placeholder {
    color: $white-primary;
  }
}

@media (mix-width: $small-device) and (max-width: $medium-device) {
  .input {
    width: 350px;
  }
}

@media (min-width: $medium-device) {
  .input {
    width: 450px;
  }
}
</style>
