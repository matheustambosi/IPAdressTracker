<template>
  <v-row class="mt-n12 justify-center mx-auto">
    <v-col cols="11" :md="12" class="d-flex justify-center align-center mt-3">
      <app-addressitem :items="itens" />
    </v-col>
  </v-row>
</template>
<script>

export default {
  name: "app-address",
  data: () => ({
    money: Math.round(Math.random()) * 2 - 1,
  }),
  components: {
    "app-addressitem": () => import("./AddressItem"),
  },
  computed: {
    moneyStatus: function () {
      return this.money < 0 ? "red--text lighten-3" : "green--text lighten-3";
    },
    itens () {
      return this.$store.state.items
    }
  },
};
</script>

<style>
.border-2 {
  border: 2px solid;
}
</style>