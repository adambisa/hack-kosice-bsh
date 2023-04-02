<template>
  <v-app theme="dark">
    <v-main>
      <Header @slide-change="handleChange">{{ pageTitle }}</Header>
      <v-container v-if="pageTitle === 'Challenges'" class="mx-auto">
        <v-row>
          <v-col v-for="n in 2" cols="12">
            <ColorPicker
              @challenge-1-state="logChallenge1ToConsole"
            ></ColorPicker>
          </v-col>
          <v-col>
            <PhoneGyration
              @challenge-6-state="logChallenge6ToConsole"
            ></PhoneGyration>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else-if="pageTitle === 'Log'">
        <pageLog :logs="logs"></pageLog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
import Header from "./components/Header.vue";
import pageLog from "./components/pageLog.vue";
import PhoneGyration from "./components/PhoneGyration.vue";
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      count: "0",
      pageTitle: "Challenges",
      logs: [],
    };
  },
  methods: {
    handleChange(e) {
      this.pageTitle = e;
    },

    logChallenge1ToConsole(e) {
      let date = new Date();

      this.logs.unshift({
        timeOf: date.toString().slice(0, -27),
        action: `Challenge 1 ${e ? "Activated" : "Deactivated"}`,
      });
    },

    logChallenge6ToConsole(e) {
      let date = new Date();

      this.logs.unshift({
        timeOf: date.toString().slice(0, -27),
        action: `Challenge 6 ${e ? "Activated" : "Deactivated"}`,
      });
    },
  },
};
</script>
