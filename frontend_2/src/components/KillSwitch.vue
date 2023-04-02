<template>
  <v-card
    class="mx-auto rounded-lg mt-4"
    max-width="340"
    color="red"
    elevation="12"
    variant="flat"
    title="Kill Switch"
    subtitle="Turn the board off"
  >
    <v-card-text> The following button turns the LED matrix off. </v-card-text>

    <v-card-actions>
      <v-btn @click="kill()" variant="flat" color="black" size="large"
        >Turn Off</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "KillSwitch",
};
</script>
