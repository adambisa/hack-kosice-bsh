<template>
  <v-card
    class="mx-auto rounded-lg mt-4"
    max-width="340"
    theme="dark"
    :color="isActive ? 'green-accent-3' : 'grey-darken-4'"
    elevation="12"
    variant="flat"
    title="Color Transition"
    subtitle="Challenge 1"
  >
    <v-card-text>
      <span class="d-block text-body-2 mb-2">Initial Color:</span>
      <v-color-picker
        hide-inputs
        color="#292929"
        elevation="0"
        v-model="color"
        disabled="true"
      ></v-color-picker>
    </v-card-text>

    <v-card-actions>
      <v-btn
        @click="changeState()"
        variant="flat"
        :color="isActive ? 'black' : 'green-accent-3'"
        size="large"
        >{{ isActive ? "Deactivate!" : "Activate!" }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
import { full_change } from "../../../backend/full_change";

export default {
  name: "ColorPicker",
  data() {
    return {
      color: { r: 255, g: 0, b: 0, a: 1 },
      isActive: false,
    };
  },
  methods: {
    changeState() {
      this.isActive = !this.isActive;
      this.$emit("challenge-1-state", this.isActive);
      // full_change();
    },
  },
};
</script>
<style lang="scss" scoped></style>
