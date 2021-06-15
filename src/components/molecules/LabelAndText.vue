<template>
  <div class="description">
    <div v-if="redirectRouter">
      <router-link
        class="description__redirectRouter"
        v-if="redirectRouter"
        :to="redirectRouter"
      >
        <Label :text="labelText" :textStyle="'label'" />
        <Link :text="text" :redirectRouter="validateRedirectRouter" />
      </router-link>
    </div>

    <div v-else>
      <Label :text="labelText" :textStyle="'label'" />
      <Link :text="text" :redirectRouter="validateRedirectRouter" />
    </div>
  </div>
</template>

<script>
import Label from '../atoms/Text';
import Link from '../atoms/Link';

export default {
  name: 'LabelAndText',
  components: {
    Label,
    Link,
  },
  props: {
    labelText: {
      type: String,
      default: () => '',
    },
    text: {
      type: String,
      default: () => '',
    },
    redirectRouter: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    validateRedirectRouter() {
      return this.redirectRouter && this.redirectRouter.path ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  &__redirectRouter {
    outline: none;
    text-decoration: none;
  }
}
</style>
