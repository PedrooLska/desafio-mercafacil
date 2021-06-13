<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/style/scss/_breakpoints.scss';

@media (min-width: $small-device) {
  .container {
    width: 95%;
    margin: 0 auto;
  }
}
</style>
