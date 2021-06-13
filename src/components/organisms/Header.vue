<template>
  <header class="header">
    <Button :text="'Back'" />

    <Input
      @inputValue="(inputValue) => changeInputValue(inputValue)"
      :placeholder="'Search'"
    />

    <OrderBy @changeOrderBy="changeOrderBy" :orderBy="orderBy" />
  </header>
</template>

<script>
import Button from '../atoms/Button.vue';
import Input from '../atoms/Input.vue';
import OrderBy from '../molecules/OrderBy.vue';

export default {
  components: {
    Button,
    Input,
    OrderBy,
  },
  data: () => ({
    orderBy: 'desc',
  }),
  methods: {
    changeOrderBy() {
      this.orderBy === 'asc' ? (this.orderBy = 'desc') : (this.orderBy = 'asc');
      this.$emit('orderCardByName');
    },
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
