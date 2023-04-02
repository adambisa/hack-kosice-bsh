<template>
  <v-app-bar theme="dark" :elevation="1" color="grey-darken-4">
    <v-app-bar-nav-icon>
      <v-icon size="large" color="white" icon="mdi-menu"></v-icon>
      <v-menu activator="parent">
        <v-list>
          <v-list-item v-for="item in items" @click="changeEmit(item.title)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar-nav-icon>
    <v-app-bar-title>
      <slot></slot>
    </v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      items: [{ title: "Challenges" }, { title: "Log" }],
      activeItem: "Challenges",
    };
  },
  methods: {
    changeEmit(e) {
      this.activeItem = e;

      this.$emit("slideChange", this.activeItem);
    },
  },
};
</script>
<style lang="scss"></style>
