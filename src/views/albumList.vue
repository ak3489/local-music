<template>
  <div class="">
    <section class="columns">
      <div class="column is-one-quarter">
          <img v-bind:src="albumInfo.album_pic | randomBookcover(true)" />
      </div>
      <div class="column">
          <div class="name title is-1">{{albumInfo.album_name}}</div>
          <div class="buttons is-right">
            <button class="button is-success" @click="playAll">播放全部</button>
            <!-- <button class="button is-danger" @click="favorite(albumInfo)">收藏</button> -->
          </div>
      </div>
    </section>
    <section class="song-list">
        <div class="columns">
            <div class="column is-one-quarter" :class="{playing:index==playIndex}"  @click="songClick(item,index)" v-for="(item,index) in list" :key="item.id">
                <img class="song-icon" :src="item.song_pic||require('../assets/img/song.svg')" alt="">
                {{item.title}}
                <div class="column is-centered">{{item.track_number}}</div>
            </div>
        </div>
    </section>
    <section  class="play-wrap">
      <vue-plyr v-if="audioSrc" ref="plyr" :options="options" >
        <audio controls playsinline ref="audio">
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
        debug:false,
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
      list: [],
      albumInfo: [],
      singerInfo:{},
      playIndex:null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    //   console.log('this.$route.params',this.$route.params);
    this.albumDetails();
  },
  mounted () {
    // this.$refs.plyr.player.on('event', () => console.log('event fired'))
  },
  methods: {
    async albumDetails() {
      var  { code, albumInfo, singerInfo, songInfo } = await this.$request.albumDetails({ id: this.id });
      if(code == 200){
          this.albumInfo = albumInfo;
          this.singerInfo = singerInfo;
          this.list = songInfo;
      }
    },
    goPlay(index){
       console.log('this.audioSrc',this.audioSrc);
        this.$refs.audio.src = this.audioSrc;
        // console.log('this.$refs.plyr',this.$refs.plyr);
        this.$refs.plyr.player.stop();
        this.$refs.plyr.player.play();
 
        this.$refs.plyr.player.on('play', () => {})
        this.$refs.plyr.player.on('ended', () => {
          if(this.playIndex+1>=this.list.length){
            console.log('列表播放完了');
          }else{
            this.playIndex = index+1;
            this.audioSrc = `${process.env.BASEAPI}/${this.list[this.playIndex].fpath.replace(/\\/g, "/").substring(7)}`;
            this.$refs.audio.src = this.audioSrc;
            this.$refs.plyr.player.play();
            console.log('this.audioSrc',this.audioSrc);
          }
        })
    },
    songClick(item,index){
      // console.log('item',item);
      this.playIndex = index;
      this.audioSrc = `${process.env.BASEAPI}/${this.list[this.playIndex].fpath.replace(/\\/g, "/").substring(7)}`;
      this.$nextTick(()=>{
        // console.log(' this.$refs.plyr', this.$refs.plyr.player.eventListeners);
       this.goPlay(index)
      })
      
    },
    playAll(){
      this.playIndex = 0;
      this.audioSrc = `${process.env.BASEAPI}/${this.list[this.playIndex].fpath.replace(/\\/g, "/").substring(7)}`;
      this.$nextTick(()=>{
        this.goPlay(this.playIndex)
      })
    },
    favorite(id){
      console.log('favorite id',this.id)
    }
  },
};
</script>

<style lang='scss' scoped>
@import './list.scss';
</style>