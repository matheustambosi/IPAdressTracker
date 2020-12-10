<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-text-field
        placeholder="Search for a IP"
        filled
        solo
        rounded
        append-icon="mdi-chevron-right"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'app-search',
  data: () => ({})
};
</script>