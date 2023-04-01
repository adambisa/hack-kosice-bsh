<template>
  <v-app-bar theme="dark" :elevation="1" color="grey-darken-4">
    <v-app-bar-nav-icon>
      <v-icon size="large" color="white" icon="mdi-menu"></v-icon>
      <v-menu activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            @click="activeItem = index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar-nav-icon>
    <v-app-bar-title>{{ items[activeItem].title }}</v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      items: [{ title: "Challenges" }, { title: "Log" }],
      activeItem: 0,
    };
  },
};
</script>
<style lang="scss"></style>
