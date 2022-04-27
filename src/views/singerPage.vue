<template>
  <div class="container">
    <section class="columns">
      <div class="column is-one-quarter">
          <img v-bind:src="singerInfo.singer_pic | randomBookcover(true)" />
      </div>
      <div class="column">
          <div class="name title is-1">{{singerInfo.name}}</div>
          <div class="sex">性别：{{singerInfo.sex||'未录入'}}</div>
          <div class="sex">生日：{{singerInfo.birthday||'未录入'}}</div>
          <div class="name">{{singerInfo.des}}</div>
      </div>
    </section>
    <section class="song-list block">
        <div class="title is-4">最新歌曲</div>
        <div class="columns" >
            <div class="column is-one-quarter" :class="{playing:index==playIndex}" @click="songClick(item,index)" v-for="(item,index) in songInfo" :key="item.id">
                  <img class="song-icon" :src="item.song_pic||require('../assets/img/song.svg')" alt="">
                  <div class="title-line-one">{{item.title}}</div>
            </div>
        </div>
    </section>
    <section class="album-list block">
       <div class="title is-4">歌手专辑</div>
       <div class="columns">
            <div class="column is-one-quarter" @click="$router.push({ name:'albumPage', params:{id: item.id} })" v-for="item in albumInfo" :key="item.id">
                <img class="song-icon" :src="item.album_pic | randomBookcover(true)" alt="">
                <div class="">{{item.album_name}}</div>
            </div>
        </div>
    </section>
    <section  class="play-wrap">
      <vue-plyr v-if="audioSrc" ref="plyr" :options="options">
      <audio controls playsinline>
        <source
            :src=audioSrc
            type="audio/mp3"
        />
      </audio>
    </vue-plyr>
    </section>
    

  </div>
</template>

<script>


export default {
  name: "",
  components: {

  },
  data() {
    return {
      audioSrc:'',
      options:{
        i18n: {
          speed: '速度',
          normal: '正常'
        }
      },
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
      id: "",
      songInfo: [],
      albumInfo: [],
      singerInfo:{},
      playIndex:null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    //   console.log('this.$route.params',this.$route.params);
    this.singerPage();
  },
  mounted () {
    // this.$refs.plyr.player.on('event', () => console.log('event fired'))
  },
  methods: {
    async singerPage() {
      var  { code, albumInfo, singerInfo, songInfo } = await this.$request.singerPage({ id: this.id });
      if(code == 200){
          this.albumInfo = albumInfo;
          this.singerInfo = singerInfo;
          this.songInfo = songInfo;
      }
    },
    songClick(item,index){
      console.log('item',item);
      this.playIndex = index;
      this.audioSrc = `${process.env.BASEURL}/${item.fpath.replace(/\\/g, "/").substring(7)}`;
      this.$nextTick(()=>{
        this.$refs.plyr.player.play();
      })
      
    }
  },
};
</script>

<style lang='scss' scoped>
@import './list.scss';
</style>