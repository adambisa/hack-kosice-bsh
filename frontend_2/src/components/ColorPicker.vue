<template>
  <v-card
    class="mx-auto"
    max-width="340"
    theme="dark"
    color="#2f3136"
    elevation="12"
    variant="flat"
    title="Color Transition"
    subtitle="Challenge 1"
  >
    <v-card-text class="mt-4">
      <span class="d-block text-body-2 mb-2">Initial Color:</span>
      <v-color-picker hide-inputs v-model="color"></v-color-picker>
    </v-card-text>

    <v-card-actions>
      <v-btn @click="logColor()" variant="text" color="red" size="large"
        >Animate!</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ColorPicker",
  data() {
    return {
      color: { r: 255, g: 0, b: 255, a: 1 },
    };
  },
  methods: {
    logColor() {
      console.log([this.color.r, this.color.g, this.color.b, this.color.a]);
    },
  },
};
</script>
<style lang="scss" scoped>
v-card {
  padding: 1.2rem 3rem;
}
</style>
