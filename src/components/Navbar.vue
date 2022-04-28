<!--
 * @LastEditors: gcz
-->
<template>
  <div class="navbar-box">
    <nav class="container">
      <div class="left">
        <router-link :class="$route.path == '/' ? 'actived':''" to="/">主页</router-link>
        <router-link :class="$route.path == '/search' ? 'actived':''" to="/search">搜索</router-link>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: 'Navbar',
  components: {
    
  },
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.navbar-box{
  position: sticky;
  box-shadow: 0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);
  background: rgba(255,255,255,.9);
  margin-bottom: 1.2rem;
  left: 0;
  right: 0;
  top: 0;
  z-index: 90;
  .left{
    display: flex;
    a{
      color: #909399;
      display: block;
      padding: 1.5rem 1rem;
      &.actived{
        color: #333;
        border-bottom: 1px solid #f80;
      }
    }
  }
  
}
</style>
