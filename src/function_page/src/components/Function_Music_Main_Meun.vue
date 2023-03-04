<template>
  <div class="div_FM_Meun_display col-lg-3">
    <div class="div_FM_Meun_bg" v-on:click="music_play">

<!--      reactive 预留代码-->
<!--      <div class="img_FM_Menu_icon row">-->
<!--        <img :src="list.value[0].al.picUrl">-->
<!--      </div>-->
<!--      <div class="p_FM_Menu_message row">-->
<!--        <p>{{list.value[0].name}} —— {{ list.value[0].ar[0].name}}</p>-->
<!--      </div>-->

      <div class="img_FM_Menu_icon ">
        <img :src="img_src">
      </div>
      <div class="div_FM_Menu_message row">
        <p>{{music_name}}<br>
          <span>{{ author_name}}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
// import {toRefs} from "vue";

import axios from "axios";
import {ref} from "vue";

export default {
  name: "Function_Music_Main_Meun",
  props: {
    music_name:String,
    author_name:String,
    img_src:String,
    music_id:Number
    // data: Object
  },
  setup(props,context) {
    console.log(props.music_id)
    const musicURL = ref()

    // const p = toRefs(props)
    // const list = p.data;
    // if (list.value.length>0){
    //   console.log("收到了")
    // }

    const music_play=()=>{
      console.log("music_play被触发")
      axios.get("http://localhost:3000/song/url/v1?id="+props.music_id+"&level=exhigh").then(Response=>{
        musicURL.value = Response.data["data"][0].url;
        context.emit("musicID",musicURL.value);
        context.emit("music_list",[props.music_name,props.author_name,props.img_src]);
      }).catch(Error => {
        console.log("error")
        console.log(Error)
      })
    }

    return {
      // list
      music_play,
      musicURL
    }
  }
}
</script>

<style scoped>
.div_FM_Meun_display {
  width: 270px;
  height: 19rem;
  margin: 40px;
}

.div_FM_Meun_bg {
  width: 100%;
  height: 100%;
  background: var(--color-musicPanel-bg_black);
  border-radius: 20px;
}
.img_FM_Menu_icon{
  width: 100%;
  height: 80%;
  font-size:0;
}
.img_FM_Menu_icon img{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0 ;
}
.div_FM_Menu_message {
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
  border-radius:0 0 20px 20px;
  color: var(--color-secondPanel-bg_white);
  background: var(--color-musicPanel-bgFont_black);
}
.div_FM_Meun_bg p {
  font-size: 20px;

}
.div_FM_Meun_bg span{
  text-align: left;
  font-size: 15px;

}
.div_FM_Meun_bg{
  transition: 0.5s;
  cursor:pointer;
}
.div_FM_Meun_bg:hover {
  transform: scale(1.05);
  padding-bottom: 5px;
  box-shadow: var(--color-musicPanel-bg_blue) 0px 20px 30px 5px;
}
</style>