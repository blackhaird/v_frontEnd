<template>
  <div class="div_FM_Meun_display col-lg-3">
    <div class="div_FM_Meun_bg ">

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

export default {
  name: "Function_Music_Main_Meun",
  props: {
    music_name:String,
    author_name:String,
    img_src:String,

    // data: Object
  },
  setup() {
    // const p = toRefs(props)
    // const list = p.data;
    // if (list.value.length>0){
    //   console.log("收到了")
    // }
    return {
      // list
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
.div_FM_Meun_bg:hover {

}
</style>