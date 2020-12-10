<template>
  <v-card class="d-flex col-sm-12 col-md-8 rounded-xl" elevation="15">
    <div class="d-flex col-3" v-for="(item, i) in items" :key="i">
      <div class="d-flex flex-column">
        <span class="result-title">{{ item.text }}</span>
        <span class="result-value">{{ item.value }}</span>
      </div>
      <v-divider v-if="showDivider(i)" vertical class="mx-4 border-2 rounded"></v-divider>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'app-addressitem',
  props: {
    items: { type: Array, default: () => [], required: true }
  },
  methods: { 
    showDivider: function (i) {
      const th = this
      return i != th.items.length -1
    }
  }
}
</script>

<style>
.result-title {
  font-size: .75em;
  font-weight: bold;
  color: hsl(0, 0%, 59%);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.result-value {
  font-size: 1.1em;
  font-weight: bold;
}
</style>