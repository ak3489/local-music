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
          :to="{ name: 'singerPage', params: { id: item.id } }"
        >
          <img v-bind:src="item.singer_pic | randomBookcover(true)" />
        </router-link>
        <router-link
          class="bookname"
          target="_blank"
          :to="{ name: 'singerPage', params: {id: item.id } }"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SingerList",
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

      this.getSingerList();

  },
  methods: {
    async getSingerList() {
      let {code,data,msg} = await this.$request.singerList({pageNo:0,pageSize:this.limit});
      this.dataList = data
      console.log('this.dataList',this.dataList);
    },
  },
};
</script>

<style lang="scss" scoped>
.list{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 44px 24px;
    text-align: center;
    img{
      border-radius: 50%;
    }
}
</style>