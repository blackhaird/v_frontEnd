<template>
  <div class="div_FM_Meun_display">
    <div class="div_FM_Meun_bg">
      <p>{{NeteaseCloudMusicApi_list.name}}</p>
    </div>
  </div>
</template>
<script>


export default {
  name: "Function_Music_Main_Meun",
  props:{
    data:{
      type: Object,
    }
  },
  setup(){
    return{
    }
  }
}
</script>

<style scoped>
.div_FM_Meun_display{
  width: 280px;
  height: 280px;
  background: red;
}
.div_FM_Meun_bg{
  width: 100%;
  height: 100%;
  background:rosybrown;
}
</style>