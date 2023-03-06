<template>
  <div id="welcome_main">
    <div class="row">
      <div class="col" id="div_login_top"></div>
    </div>

    <div class="row">

      <div class="col"></div>
      <div class="col-3 row" id="div_login">
        <div id="div_message" class="col">
          <div class="row">
            <img src="~@/../public/img/logo.png" id="img_logo" class="col">
          </div>
          <div class="row">
            <h1 class="col">
              网页在线音乐平
            </h1>
            <span>网站式音乐平台,无需APP,点击即用。轻便,快捷,多平台适配</span>
          </div>
        </div>

        <div class="col display_center">
          <Welcome_login_panel @registerPanel_show="get_registerPanel_show" v-show="loginPanel_show_value"></Welcome_login_panel>
          <Welcome_register_panel @loginPanel_show = "get_loginPanel_show" v-show="registerPanel_show_value" ></Welcome_register_panel>
        </div>
      </div>

      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import Welcome_login_panel from "@/welcome_page/src/components/Welcome_login_panel.vue";
import Welcome_register_panel from "@/welcome_page/src/components/Welcome_register_panel.vue";
import {ref} from "vue";
export default {
  name: "welcomeApp",
  components:{
    Welcome_login_panel,
    Welcome_register_panel,
  },
  setup(){
    const loginPanel_show_value = ref(true);
    const registerPanel_show_value = ref(false);


    const get_registerPanel_show=(isShow_value)=>{
      console.log("get_registerPanel_show 函数被触发,申请显示页面register 结果为："+isShow_value)
      registerPanel_show_value.value = isShow_value;
      loginPanel_show_value.value = !isShow_value;
    }

    const get_loginPanel_show=(isShow_value)=>{
      console.log("get_registerPanel_show 函数被触发,申请显示页面login 结果为："+isShow_value)
      loginPanel_show_value.value = isShow_value;
      registerPanel_show_value.value = !isShow_value;
    }

    return{
      //value
      registerPanel_show_value,
      loginPanel_show_value,

      //funtion
      get_registerPanel_show,
      get_loginPanel_show,

    }
  }
}
</script>

<style scoped>
@import "~@/../public/css/display_style.css";
@import "~@/../public/css/modify_default_property.css";
#welcome_main {
  background: url("~@/../public/img/blurry-gradient-haikei.svg");
  position: fixed;
  width: 100%;
  height: 100%;
}

#div_login {
  width: 100rem;
  height: 35rem;
}

#div_message {
  text-align: center;
}

#div_login_top {
  width: 100rem;
  height: 20vh;
}

#img_logo {
  margin: auto;
  margin-top: 7rem;
  height: auto;
  max-width: 20vh;
}

</style>