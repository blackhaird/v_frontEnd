<template>
  <div class="div_FM_display row">
    <div class="div_FM_music_title_display row">
      <div class="col">
        <h1>音乐<span>歌单</span></h1>
        <h2>Music <span>playlist</span></h2>
      </div>

      <div class="col" style="text-align: right;line-height:100px;font-weight: bold">
        <span>Welcome you</span>: @XJW</div>

    </div>
    <!--    <Function_Music_Main_Meun :data="NeteaseCloudMusicApi_list" v-if="data_completion" >{{item}}</Function_Music_Main_Meun>-->
    <div class="row div_FMM_Meun">
      <Function_Music_Main_Meun v-for="item in NeteaseCloudMusicApi_list" v-bind:key="item" :music_name="item.name"
                                :img_src="item.al.picUrl" :music_id="item.id" :author_name="item.ar[0].name"
                                @musicID="get_MusicID" @music_list="get_imgSrc">
        {{ NeteaseCloudMusicApi_list.value }}
      </Function_Music_Main_Meun>
    </div>


    <div class="row">
      <div class="div_FMM_audio_img_display col-lg-3">
        <img :src="img_src">
      </div>
      <div class="col">
        <div class="row div_FMM_audio_message_display">
          <p>{{music_author_name}}</p>
        </div>
        <audio v-bind:src="musicID" class="audio row" controls autoplay @play="play" @pause="pause"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import Function_Music_Main_Meun from "@/function_page/src/components/Function_Music_Main_Meun.vue";
import axios from "axios";
import {ref} from "vue";

export default {
  name: "Function_Music_main",
  components: {
    Function_Music_Main_Meun
  },
  setup() {
    const data_completion = ref(false);
    // const NeteaseCloudMusicApi_list = reactive([]);

    const musicID = ref("")
    const music_list = ref()

    const music_name = ref("")
    const author_name = ref("")
    const img_src = ref("")

    const music_author_name = ref("")

    const NeteaseCloudMusicApi_list = ref([]);
    axios.get("http://localhost:3000/playlist/track/all?id=363365239").then(Response => {
      console.log("请求成功");
      // for (let i = 0; i < Response.data["songs"].length; i++) {
      //   console.log(Response.data["songs"][i])
      // }
      NeteaseCloudMusicApi_list.value = Response.data["songs"]
      console.log(NeteaseCloudMusicApi_list.value[0].ar[0].name)
      if (NeteaseCloudMusicApi_list.value.length > 0) {
        data_completion.value = true;
      } else {
        data_completion.value = false;
      }
      // console.log(NeteaseCloudMusicApi_list.value["0"])
    }).catch(Error => {
      console.log("请求失败");
      console.log(Error);
      console.log(Error.data);
    })


    const get_MusicID = (musicID_data) => {
      console.log("get_MusicID被触发")
      musicID.value = musicID_data
    }
    const get_imgSrc = (music_List_data) => {
      console.log("imgSrc_data被触发")
      music_name.value = music_List_data[0]
      author_name.value = music_List_data[1]
      img_src.value = music_List_data[2]
      music_author_name.value = music_List_data[0] + "——" + music_List_data[1]
    }
    return {
      NeteaseCloudMusicApi_list,
      data_completion,
      musicID,
      music_list,
      get_MusicID,
      get_imgSrc,

      music_name,
      author_name,
      img_src,
      music_author_name
    }
  }
}
</script>

<style scoped>
.div_FM_display {
  width: 100%;
  height: 100vh;
}

.div_FMM_Meun {
  height: 75vh;
  overflow: auto;
}

.audio {
  width: 100%;
  height: 60px;
}
.div_FM_music_title_display{
  /*border-bottom: var(--color-button_color_blue) solid 1px;*/
}
.div_FM_music_title_display h1 {
  font-size:60px;
  font-weight: bold;
}
.div_FM_music_title_display span{
  color: var(--color-secondPanel-bg_blue);
}
.div_FM_music_title_display h2{
  margin-left: 120px;
}
.div_FMM_audio_img_display {
  width: 100px;
  height: 100px;
}

.div_FMM_audio_img_display img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  margin-top: 2px;
  border-radius: 15px;
}
.div_FMM_audio_message_display{
  width: auto;
  height: 5vh;
}
.div_FMM_audio_message_display p{
  line-height: 80px;
  font-size: 20px;
  font-weight: bold;
}

img[src=''],
img:not([src]) {
  opacity: 0;
}
</style>