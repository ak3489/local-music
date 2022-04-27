<!--
 * @LastEditors: gcz
-->
<template>
  <div class="container type-block">
    <div class="til" v-if="title">
      <router-link :to="{ name: 'ListType', params: { ListType: title } }"
        >{{ title }}</router-link
      >
    </div>
    <div
      class="nextgroup el-icon-refresh"
      v-if="title"
      v-on:click="
        getbook(
          title,
          list.length,
          function (data) {
            list = data;
          },
          'random'
        )
      "
    ></div>
    <ul class="list">
      <li v-for="item in dataList" v-bind:key="item.id">
        <router-link
          class="listimg"
          target="_blank"
          :to="{ name: 'albumPage', params: { ListType: title,id: item.id } }"
        >
          <img v-bind:src="item.album_pic | randomBookcover(true)" />
          <span v-if="item.bookLength" class="total-chapter"
            >总{{ item.bookLength }}章</span
          >
        </router-link>
        <router-link
          class="bookname"
          target="_blank"
          :to="{ name: 'albumPage', params: { ListType: title,id: item.id } }"
          >{{ item.album_name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "typeBlock",
  props: {
    title: String,
    type: String,
    limit: String,
  },
  data() {
      return {
          dataList:[]
      }
  },
  created() {
    switch (this.type) {
      case 'album':
        this.getAlbumList();
        break;
      default:
        break;
    }
  },
  methods: {
    async getAlbumList() {
      let {code,data,msg} = await this.$request.albumList({pageNo:1,pageSize:this.limit});
      this.dataList = data.list
      console.log('this.dataList',this.dataList);
    },
  },
};
</script>

<style>
.list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 44px 24px;
}
</style>