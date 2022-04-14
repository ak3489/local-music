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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 10vw 96px 10vw;
}
</style>
