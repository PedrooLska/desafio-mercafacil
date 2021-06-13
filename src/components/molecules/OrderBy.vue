<template>
  <Icon
    @eventClick="eventClick"
    :icon="changeIcon"
    :size="'fa-2x'"
    :color="'gray-light'"
  />
</template>

<script>
import Icon from '../atoms/Icon.vue';

export default {
  name: 'OrderBy',
  components: {
    Icon,
  },
  props: {
    orderBy: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    changeIcon() {
      return this.orderBy == 'asc'
        ? 'fas fa-sort-amount-up-alt'
        : 'fas fa-sort-amount-down-alt';
    },
  },
  methods: {
    eventClick() {
      this.$emit('changeOrderBy');
    },
  },
};
</script>
