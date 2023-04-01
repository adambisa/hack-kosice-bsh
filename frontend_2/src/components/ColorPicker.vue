<template>
  <v-card>
    <span class="text-subtitle-2">Challenge 1</span>
    <h1 class="text-h3">Color Transition</h1>
    <v-color-picker></v-color-picker>
  </v-card>
</template>
<script>
export default {
  name: "ColorPicker",
};
</script>
<style lang="scss" scoped>
.text-subtitle-2 {
  background-color: red;
}
</style>
