<script setup>
import Navigation from "./components/Navigation.vue";
import Button from "./components/Button.vue";
import TransitionSection from "./components/TransitionSection.vue";
</script>

<template>
  <Navigation></Navigation>
  <Button>Dement</Button>
  <TransitionSection></TransitionSection>
</template>

<style lang="scss">
@import "assets/styles/reset";
@import "assets/styles/abstracts";

.container {
  max-width: 35rem;
  margin: 0 auto;
}
</style>
