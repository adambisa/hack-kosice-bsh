<template>
  <v-app>
    <v-main>
        <SelectMenu></SelectMenu>
      <ColorPicker></ColorPicker>
    </v-main>
  </v-app>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
import SelectMenu from "./components/SelectMenu.vue";
</script>
