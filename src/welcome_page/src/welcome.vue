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
            <img src="./assets/img/logo.png" id="img_logo" class="col">
          </div>
          <div class="row">
            <h1 class="col">
              产品设计一体化工具
            </h1>
            <span>一站式完成白板、原型、设计、交付和管理，把产品设
            计得更美好</span>
          </div>
        </div>

        <div class="col display_center">
          <Welcome_login_panel @registerPanel_show="get_registerPanel_show"></Welcome_login_panel>
          <Welcome_register_panel v-show="registerPanel_show_value" ></Welcome_register_panel>
        </div>
      </div>

      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import Welcome_login_panel from "@/welcome_page/src/components/Welcome_login_panel.vue";
import Welcome_register_panel from "@/welcome_page/src/components/Welcome_register_panel.vue";
export default {
  name: "welcomeApp",
  components:{
    Welcome_login_panel,
    Welcome_register_panel,
  },
  setup(){
    const registerPanel_show_value = false;
    const get_registerPanel_show=(val)=>{
      console.log(val)
      registerPanel_show_value === val;
    }
    console.log(registerPanel_show_value)
    return{
      registerPanel_show_value,
      get_registerPanel_show
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