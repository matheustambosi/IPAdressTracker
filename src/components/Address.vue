<template>
  <v-row class="mt-n12 justify-center mx-auto">
    <v-col cols="11" :md="12" class="d-flex justify-center align-center mt-5">
      <app-addressitem :items="items" />
    </v-col>
  </v-row>
</template>
<script>
  export default {
  name: "app-address",
    data: () => ({
      money: Math.round(Math.random()) * 2 - 1,
      items: []
    }),
    components: {
      'app-addressitem': () => import('./AddressItem')
    },
    computed: {
      moneyStatus: function() {
        return this.money < 0 ? 'red--text lighten-3' : 'green--text lighten-3'
      }
    },
    beforeMount() {
      const items = [{ text: 'IP Address', value: '192.212.174.101' },
                     { text: 'Location', value: 'Brooklyn, NY 10001' },
                     { text: 'Timezone', value: 'Eastern Daylight Time' },
                     { text: 'ISP', value: 'SpaceX Starlink' }]
      this.items = items
    }
  }
</script>

<style>
  .border-2 {
    border: 2px solid;
  }
</style>