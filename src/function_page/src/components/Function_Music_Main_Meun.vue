<template>
  <div class="div_FM_Meun_display">
    <div class="div_FM_Meun_bg">
      <p>{{list.value[0].name}}</p>
      <img :src="list.value[0].al.picUrl">
    </div>
  </div>
</template>
<script>
import {toRefs} from "vue";
export default {
  name: "Function_Music_Main_Meun",
  props:{
    data:Object
  },
  setup(props){
    const p = toRefs(props)
    const list = p.data;
    return{
      list
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