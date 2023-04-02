<template>
  <v-app theme="dark">
    <v-main>
      <Header @slide-change="handleChange">{{ pageTitle }}</Header>
      <v-container v-if="pageTitle === 'Challenges'" class="mx-auto">
        <v-row>
          <v-col v-for="n in 3" cols="4">
            <ColorPicker @challenge-1-activate="logChallenge1ToConsole"></ColorPicker>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else-if="pageTitle==='Log'">
        <pageLog></pageLog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
import Header from "./components/Header.vue";
import pageLog from "./components/pageLog.vue";
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      count: "0",
      pageTitle: "Challenges",
      logs: []
    };
  },
  methods: {
    handleChange(e) {
      this.pageTitle = e;
    },
    logChallenge1ToConsole(){

    }
  },
};
</script>
