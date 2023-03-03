<template>
  <div class="div_FM_display">
    <Function_Music_Main_Meun :data="NeteaseCloudMusicApi_list"></Function_Music_Main_Meun>
  {{test_list["data"]}}
  </div>
</template>

<script>
import Function_Music_Main_Meun from "@/function_page/src/components/Function_Music_Main_Meun.vue";
import axios from "axios";
import {reactive} from "vue";
export default {
  name: "Function_Music_main",
  components:{
    Function_Music_Main_Meun
  },
  setup(){
    const test_list = reactive({
      name: 'John Doe',
      age: 30,
      address: '123 Main St'
    })
    const NeteaseCloudMusicApi_list = reactive([]);
    axios.get("http://localhost:3000/playlist/track/all?id=5403278437&limit=10&offset=1").then(Response=>{
      console.log("请求成功");
      // for (let i = 0; i < Response.data["songs"].length; i++) {
      //   console.log(Response.data["songs"][i])
      // }
      NeteaseCloudMusicApi_list.value = Response.data["songs"]
      console.log(NeteaseCloudMusicApi_list.value)
      // console.log(NeteaseCloudMusicApi_list.value["0"])
    }).catch(Error =>{
      console.log("请求失败");
      console.log(Error);
      console.log(Error.data);
    })


    return{
      NeteaseCloudMusicApi_list,
      test_list
    }
  }
}
</script>

<style scoped>
.div_FM_display{
  width: 100%;
  height: 100vh;
  background: yellow;
}
</style>