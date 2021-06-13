<template>
  <header class="header">
    <Button :text="'Back'" class="header__button" />

    <Input
      class="header__input"
      @inputValue="(inputValue) => changeInputValue(inputValue)"
      :placeholder="'Search'"
    />
    <Icon
      :icon="'fas fa-sort-amount-down-alt'"
      :size="'fa-2x'"
      :color="'red'"
    />

    <!-- <div class="header__icon">
      <Icon
        :icon="'fas fa-sort-amount-up-alt'"
        :size="'fa-2x'"
        :color="'gray-light'"
      />
    </div> -->
  </header>
</template>

<script>
import Button from '../atoms/Button.vue';
import Input from '../atoms/Input.vue';
import Icon from '../atoms/Icon.vue';

export default {
  components: {
    Button,
    Input,
    Icon,
  },
  props: {
    inputValue: {
      type: Function,
      default: () => '',
    },
  },
  methods: {
    changeInputValue(valueInput) {
      this.$emit('inputValue', valueInput);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/scss/_breakpoints.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
}

@media (max-width: $small-device) {
  .header {
    padding: 1em 1em;
  }
}
</style>
