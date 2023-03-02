<template>
  <div class="div_FM_display">
    <Function_Music_Main_Meun></Function_Music_Main_Meun>
  </div>
</template>

<script>
import Function_Music_Main_Meun from "@/function_page/src/components/Function_Music_Main_Meun.vue";
export default {
  name: "Function_Music_main",
  components:{
    Function_Music_Main_Meun
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