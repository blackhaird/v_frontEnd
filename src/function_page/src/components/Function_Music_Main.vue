<template>
  <div class="div_FM_display">
    <!--    <Function_Music_Main_Meun :data="NeteaseCloudMusicApi_list" v-if="data_completion" >{{item}}</Function_Music_Main_Meun>-->
    <div class="row div_FMM_Meun">
      <Function_Music_Main_Meun v-for="item in NeteaseCloudMusicApi_list" v-bind:key="item" :music_name="item.name"
                                :img_src="item.al.picUrl" :author_name="item.ar[0].name">
        {{ NeteaseCloudMusicApi_list.value }}
      </Function_Music_Main_Meun>
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
    const NeteaseCloudMusicApi_list = ref([]);
    axios.get("http://localhost:3000/playlist/track/all?id=5403278437&limit=10&offset=1").then(Response => {
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
    return {
      NeteaseCloudMusicApi_list,
      data_completion
    }
  }
}
</script>

<style scoped>
.div_FM_display {
  width: 100%;
  height: 100vh;
}
.div_FMM_Meun{
  height: 85vh;
  overflow: auto;
}
</style>