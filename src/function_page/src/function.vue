<template>
  <div class="div_function_main_display row">
    <Function_Sidebar :lists_item="sidebar_list"></Function_Sidebar>
  </div>
</template>

<script>
import Function_Sidebar from "@/function_page/src/components/Function_Sidebar.vue";
import {ref} from "vue";
export default {
  name: "functionApp",
  components:{
    Function_Sidebar,
  },
  setup(){
    const sidebar_list =ref([
      {
        "title_zh":"音乐",
        "title_en":"MUSIC"
      },
      {
        "title_zh":"网站",
        "title_en":"WEBSITE"
      },
      {
        "title_zh":"导航",
        "title_en":"NAVIGATION"
      },
    ])
    console.log(sidebar_list.value)
    console.log(typeof sidebar_list.value)
    return{
      sidebar_list
    }
  }
}
</script>

<style scoped>
.div_function_main_display{
  width: 100%;
  height: 100vh;
  background: var(--color-bg_white);
}
</style>