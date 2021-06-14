<template>
  <div class="pageButtons">
    <Button
      :text="'Back Page'"
      :icon="'fas fa-arrow-left'"
      :positionIcon="'left'"
      @eventClick="removePageGetCharacters()"
    />
    <span />
    <Button
      :text="'Next Page'"
      :icon="'fas fa-arrow-right'"
      :positionIcon="'right'"
      @eventClick="addPageGetCharacters()"
    />
  </div>
</template>

<script>
import Button from '../atoms/Button.vue';

export default {
  name: 'PageButtons',
  components: {
    Button,
  },
  methods: {
    removePageGetCharacters() {
      this.$emit('removePageGetCharacters');
    },
    addPageGetCharacters() {
      this.$emit('addPageGetCharacters');
    },
  },
};
</script>

<style lang="scss" scoped>
.pageButtons {
  display: flex;
  justify-content: center;
  margin: 1em 0;

  span {
    margin: 1em 0.5em;
  }
}
</style>
