<template>
  <v-app theme="dark">
    <v-main>
      <Header></Header>

      <ColorPicker></ColorPicker>
    </v-main>
  </v-app>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
import Header from "./components/Header.vue";
</script>
