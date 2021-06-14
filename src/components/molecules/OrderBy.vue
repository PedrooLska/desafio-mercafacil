<template>
  <Icon
    @eventClick="eventClick"
    :icon="changeIcon"
    :size="'2x'"
    :color="'-gray-light'"
  />
</template>

<script>
import Icon from '../atoms/Icon.vue';

export default {
  name: 'OrderBy',
  components: {
    Icon,
  },
  data: () => ({
    orderBy: 'asc',
  }),
  computed: {
    changeIcon() {
      return this.orderBy === 'asc'
        ? 'fas fa-sort-amount-up-alt'
        : 'fas fa-sort-amount-down-alt';
    },
  },
  methods: {
    eventClick() {
      this.$emit('changeOrderBy');
      this.orderBy === 'asc' ? (this.orderBy = 'desc') : (this.orderBy = 'asc');
    },
  },
};
</script>
