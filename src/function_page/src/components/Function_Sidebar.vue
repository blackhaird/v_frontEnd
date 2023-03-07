<template>
  <div class="div_function_Sidebar_main_display ">
    <div class="div_function_Sidebar_main_li_display ">
      <ul>
          <li v-for="item in lists_item" v-bind:key="item" @click="go_to(item)">
            <p>{{ item["title_zh"] }}</p>
            <span>{{ item["title_en"] }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>

import {toRefs} from "vue";

export default {
  name: "Function_Sidebar",
  props: {
    "lists_item": {
      type: Array
    }
  },
  setup(props) {
    const p = toRefs(props)
    const go_to = (item)=>{
      if (item["title_en"]==="WEBSITE"){
        window.location.href = "/main_page"
      }
    }
    return {
      p,
      go_to
    }
  }
}
</script>

<style scoped>
.div_function_Sidebar_main_display {
  position: relative;
  z-index: 999;
  width: 100%;
}
.div_function_Sidebar_main_li_display li {
  z-index: 999;
  position: relative;
  height: 15vh;
  background: var(--color-secondPanel-bg_white);
  color: var(--color-font_black);
  font-weight: bold;
  transition: 0.5s;
}
.div_function_Sidebar_main_li_display ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.div_function_Sidebar_main_display span{
  font-size: 25px;
  padding-left: 30px;
  padding-bottom: 20px;
  position: relative;
}
.div_function_Sidebar_main_li_display li:hover{
  position: relative;
  z-index: 999;
  background: var(--color-secondPanel-bg_blue);
  color: var(--color-secondPanel-bg_white);
  box-shadow: var(--color-button_color_blue) 10px 10px 40px 5px;
  margin-left: 20px;
}
.div_function_Sidebar_main_li_display p{
  padding-left: 10px;
  font-size: 50px;
}
</style>