<template>
  <div id="app">
    <Navbar v-show="showNavbar" ref="navbar" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
   components: {
     Navbar
   },
   data() {
     return {
       showNavbar:true
     }
   },
}
</script>

<style>
</style>
