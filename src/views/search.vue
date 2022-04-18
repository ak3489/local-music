<template>
  <div class="">
    <section class="search-wrap is-flex is-align-items-center is-justify-content-center">
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" v-model="keyword" placeholder="请输入搜索内容" />
        </p>
        <p class="control">
          <a class="button is-primary" @click="doSearch"> 搜索 </a>
        </p>
      </div>
    </section>
    <section class="container">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li @click="typeClick(index)" v-for="(item, index) in searchType" :class="{'is-active':index == searchTypeIndex}" :key="index"><a href="#">{{item}}</a></li>
            </ul>
        </nav>
        <!-- 歌曲列表 -->
        <div class="search-result" v-if="searchTypeIndex==0">
            <div class="columns is-flex-wrap-wrap">
                <div class="column is-one-quarter" v-for="(item) in songList" :key="item.id">
                  <img :src="item.song_pic | randomBookcover(true)" alt="" srcset="">
                  <div>{{item.title}}</div>
                  <div class="play-btn" @click="playSong(item)">
                    <svg t="1650260760385" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2571" width="128" height="128">
                      <path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" fill="#fff" p-id="2572"></path>
                    </svg>
                  </div>
                </div>
            </div>
        </div>
        <!-- 歌曲列表 -->
        <!-- 专辑列表 -->
        <div class="search-result" v-if="searchTypeIndex==1">
            <div class="columns is-flex-wrap-wrap">
                <div class="column is-one-quarter" v-for="(item) in albumList" :key="item.id" @click="$router.push({ name:'albumPage', params:{id: item.id} })">
                  <img :src="item.album_pic | randomBookcover(true)" alt="" srcset="">
                  <div>{{item.album_name}}</div>
                </div>
            </div>
        </div>
        <!-- 专辑列表 -->
        <!-- 歌手列表 -->
        <div class="search-result" v-if="searchTypeIndex==2">
            <div class="columns is-flex-wrap-wrap">
                <div class="column is-one-quarter" v-for="(item) in singerList" :key="item.id" @click="$router.push({ name:'singerPage', params:{id: item.id} })">
                  <img :src="item.singer_pic | randomBookcover(true)" alt="" srcset="">
                  <div>{{item.name}}</div>
                </div>
            </div>
        </div>
        <!-- 歌手列表 -->
        <pagination :urlPrefix="'/'" :currentPage="2" :lastPage="100" />
        <Empty v-if="albumList.length<=0&&songList.length<=0&&singerList.length<=0" description="没有数据" />
    </section>
    <section class="plyr-wrap">
      <div class="plyr-inner">
      <vue-plyr v-if="audioSrc" ref="plyr" :options="options" >
        <audio controls playsinline ref="audio">
          <source
              :src=audioSrc
              type="audio/mp3"
          />
        </audio>
      </vue-plyr>
      </div>
    </section>
  </div>
</template>

<script>
import Empty from '../components/empty';
import Pagination from '../components/pagination'
export default {
  name: "",
  components: {
    Empty,
    Pagination
  },
  data() {
    return {
        options:{
          debug:false,
          i18n: {
            speed: '速度',
            normal: '正常'
          }
        },
        audioSrc:'',
        searchType:['歌曲','专辑','歌手'],
        keyword:'',
        searchTypeIndex:0,
        albumList:[],
        songList:[],
        singerList:[],
        queryParams: {
            pageNum: 1,
            pageSize: 10,
        },
    };
  },
  created() {
    this.getSongList()
  },
  methods: {
    async getAlbumList() {
        let {code,data,msg} = await this.$request.albumList({keyword:this.keyword,pageNo:0,pageSize:this.queryParams.pageSize});
        this.albumList = data
        console.log('this.albumList',this.albumList);
    },
    async getSongList() {
        let {code,data,msg} = await this.$request.songList({keyword:this.keyword,pageNo:0,pageSize:this.queryParams.pageSize});
        this.songList = data
        console.log('this.songList',this.songList);
    },
    async getSingerList() {
        let {code,data,msg} = await this.$request.singerList({keyword:this.keyword,pageNo:0,pageSize:this.queryParams.pageSize});
        this.singerList = data
        console.log('this.singerList',this.singerList);
    },
    doSearch(){
        switch (this.searchTypeIndex) {
            case 0:
                this.getSongList()
                break;
            case 1:
                this.getAlbumList()
                break;
            case 2:
                this.getSingerList()
                break;
        
            default:
                break;
        }
    },
    typeClick(index){
      this.searchTypeIndex = index
    },
    playSong(item){
      this.audioSrc = `${process.env.BASEAPI}/${item.fPath.replace(/\\/g, "/").substring(7)}`;
      this.$nextTick(()=>{
        this.$refs.audio.src = this.audioSrc;
        // console.log('this.$refs.plyr',this.$refs.plyr);
        this.$refs.plyr.player.stop();
        this.$refs.plyr.player.play();
      })
    }
  },
};
</script>

<style lang='scss' scoped>
@import './search.scss'
</style>