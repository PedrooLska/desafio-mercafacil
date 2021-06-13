<template>
  <div class="description">
    <Label :text="labelText" /><Link :text="text" :link="link" />
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
    link: {
      type: String,
      default: () => '',
    },
  },
};
</script>
