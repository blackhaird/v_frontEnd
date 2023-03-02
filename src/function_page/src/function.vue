<template>
  <div class="div_function_main_display row">
    <div class="div_function_sidebar_display col-lg-2">
      <Function_Sidebar :lists_item="sidebar_list"></Function_Sidebar>
    </div>
    <div class="div_function_function_panel_display col">
      <Function_Music_Main></Function_Music_Main>
    </div>
  </div>
</template>

<script>
import Function_Sidebar from "@/function_page/src/components/Function_Sidebar.vue";
import {ref} from "vue";
import Function_Music_Main from "@/function_page/src/components/Function_Music_Main.vue";


export default {
  name: "functionApp",
  components: {
    Function_Music_Main,
    Function_Sidebar,
  },
  setup() {
    const sidebar_list = ref([
      {
        "title_zh": "音乐",
        "title_en": "MUSIC"
      },
      {
        "title_zh": "网站",
        "title_en": "WEBSITE"
      },
      {
        "title_zh": "导航",
        "title_en": "NAVIGATION"
      },
    ])
    console.log(sidebar_list.value)
    console.log(typeof sidebar_list.value)
    return {
      sidebar_list
    }
  }
}
</script>

<style scoped>
.div_function_main_display {
  width: 100%;
  height: 100vh;
  background: var(--color-bg_white);
}

.div_function_function_panel_display {
  width: 40%;
  height: 100vh;
  background: rebeccapurple;
}
</style>