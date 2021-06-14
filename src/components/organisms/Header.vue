<template>
  <header class="header">
    <div>
      <Button
        v-show="showButtonBack"
        :text="'Back'"
        :icon="'fas fa-arrow-left'"
        :positionIcon="'left'"
        @eventClick="backPage"
      />
    </div>

    <div class="header__searchBar" v-show="showSearchBar">
      <Input
        @inputValue="(inputValue) => changeInputValue(inputValue)"
        :placeholder="'Search'"
      />
      <OrderBy @changeOrderBy="changeOrderBy" />
    </div>

    <div></div>
  </header>
</template>

<script>
import Button from '../atoms/Button.vue';
import Input from '../atoms/Input.vue';
import OrderBy from '../molecules/OrderBy.vue';

export default {
  name: 'Header',
  components: {
    Button,
    Input,
    OrderBy,
  },
  props: {
    showButtonBack: {
      type: Boolean,
      default: () => false,
    },
    showSearchBar: {
      type: Boolean,
      default: () => true,
    },
  },
  data: () => ({
    orderBy: 'desc',
  }),
  methods: {
    changeOrderBy() {
      this.$emit('orderCardByName');
    },
    changeInputValue(inputValue) {
      this.$emit('inputValue', inputValue);
    },
    backPage() {
      this.$emit('backPage');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/scss/_breakpoints.scss';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  height: 50px;
  &__searchBar {
    display: flex;
    align-items: center;
  }
}

@media (max-width: $small-device) {
  .header {
    padding: 1em 1em;
  }
}
</style>
