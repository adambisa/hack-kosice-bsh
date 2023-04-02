<template>
  <v-card
    class="mx-auto rounded-lg mt-10"
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
      ></v-color-picker>
    </v-card-text>

    <v-card-actions>
      <v-btn
        @click="activate()"
        variant="flat"
        color="green-accent-3"
        size="large"
        class="button"
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
      color: { r: 255, g: 0, b: 255, a: 1 },
      isActive: false,
    };
  },
  methods: {
    activate(e) {
      this.isActive = !this.isActive;
      // full_change();
    },
  },
};
</script>
<style lang="scss" scoped></style>
