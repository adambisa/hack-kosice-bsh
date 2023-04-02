<template>
  <v-app theme="dark">
    <v-main>
      <Header @slide-change="handleChange">{{ pageTitle }}</Header>
      <v-container v-if="pageTitle === 'Challenges'" class="mx-auto">
        <v-row>
          <v-col v-for="n in 3" cols="4">
            <ColorPicker></ColorPicker>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
import Header from "./components/Header.vue";
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      count: "0",
      pageTitle: "Challenges",
    };
  },
  methods: {
    handleChange(e) {
      this.pageTitle = e;
    },
  },
};
</script>
