<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
          <v-btn
          color="white"
          v-bind="props"
          class="item-1"
        >
        <i class="gg-menu"></i>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Challenges'},
        { title: 'Log'},
      ],
    }),
  }
</script>
<style>
.app-container {
  display: flex !important;
  align-content: space-between !important;
}
.item-1{
  flex: 1;
}
.item-2{
  flex: 2;
}
.item-3{
  flex:   3;
}
</style>