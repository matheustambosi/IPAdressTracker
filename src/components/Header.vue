<template>
<div>
  <v-img
    class="background-img"
    min-height="150"
    max-height="200"
    src="../../public/assets/images/pattern-bg.png">
  </v-img>
  <app-title></app-title>
  <app-search></app-search>
</div>
</template>

<script>
export default {
  name: 'app-header',
  components: {
    'app-search': () => import('./Search'),
    'app-title': () => import('./Title')
  },
  data: () => ({}),
};
</script>

<style>
.background-img {
  height: 27vh;
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  width: 100vw;
  margin: 0;
  z-index: -2;
}
</style>