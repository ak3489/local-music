<!--
 * @LastEditors: gcz
-->
<template>
  <div>
    <ListBlock class="block" title="专辑列表" type="album" limit="5"></ListBlock>
    <SingerList  class="block" title="歌手列表" type="singer" limit="5"></SingerList>
  </div>
</template>

<script>
import ListBlock from './listBlock.vue';
import SingerList from './singerList.vue';
export default {
  name: "HelloWorld",
  components: {
     ListBlock,
     SingerList
   },
  data() {
    return {
      artist: [],
      album: [],
    };
  },
  created() {
    
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
