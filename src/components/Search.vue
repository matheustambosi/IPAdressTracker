<template>
  <v-text-field
    class="col-10 col-md-6"
    placeholder="Search for a IP"
    solo
    rounded
    append-icon="mdi-chevron-right"
    v-model="ip"
    @click:append="search"
  ></v-text-field>
</template>

<script>
export default {
  name: "app-search",
  data: () => ({
    ip: "",
  }),
  methods: {
    search() {
      this.$store.dispatch("search", this.ip);
    },
  },
};
</script>