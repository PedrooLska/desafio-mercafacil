<template>
  <header class="header">
    <div v-show="showButtonBack">
      <Button
        :text="'Back'"
        :icon="'fas fa-arrow-left'"
        :positionIcon="'left'"
      />
    </div>

    <div v-show="showInput">
      <Input
        @inputValue="(inputValue) => changeInputValue(inputValue)"
        :placeholder="'Search'"
      />
    </div>

    <OrderBy @changeOrderBy="changeOrderBy" :orderBy="orderBy" />
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
    showInput: {
      type: Boolean,
      default: () => true,
    },
  },
  data: () => ({
    orderBy: 'desc',
  }),
  methods: {
    changeOrderBy() {
      this.orderBy === 'asc' ? (this.orderBy = 'desc') : (this.orderBy = 'asc');
      this.$emit('orderCardByName');
    },
    changeInputValue(inputValue) {
      this.$emit('inputValue', inputValue);
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
  height: 50px;
}

@media (max-width: $small-device) {
  .header {
    padding: 1em 1em;
  }
}
</style>
