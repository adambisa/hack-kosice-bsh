<template>
    <div>
      <v-toolbar
        dark
        prominent    
        color="#2f3136"
      >
      <MenuHandler></MenuHandler> 
  
        <v-toolbar-title></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
      </v-toolbar>
    </div>
  </template>

<script>
import MenuHandler from './menuHandler.vue';
export default{
    name:'SelectMenu',
    components:{
        MenuHandler,
    }
}

</script>