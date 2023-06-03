<template>
  <transition name="panel_animation">
  <div id="div_login_panel">
    <div class="font_top">用户登录</div>
<!--    <X_input :input-value="inputValue_userid" ref="inputValue_userid"></X_input>-->
<!--    <br><br>-->
<!--    <X_input :input-value="inputValue_password" ref="inputValue_password"></X_input>-->
<!--    <br><br>-->
      <input ref="inputValue_userid" type="text">
      <input ref="inputValue_password" type="password">
      <span class="row" style="text-align: center;color: red;left: 15%;position:relative">
          {{login_message}}
      </span>
    <span class="row">
              <a class="col">忘记密码</a>
              <a class="col" @click="changePanel_to_register">注册账号</a>
            </span><br><br>
    <!--            <span class="col double_ended_line ">点击</span><br><br>-->
      <X_button class="col" @click="get_data_for_check"></X_button>
  </div>
  </transition>
</template>

<script>
import X_button from "@/components/X_button.vue";
// import X_input from "@/components/X_input.vue";
import {ref} from "vue";
export default {
  name: "Welcome_login_panel",
  components: {
    // X_input,
    X_button
  },

  setup(props, context){
    const inputValue_userid = ref("请输入账号");
    const inputValue_password = ref("请输入密码");
    const login_message =ref("");
    const changePanel_to_register =() =>{
      console.log("changePanel_to_register 函数被触发")
      context.emit('registerPanel_show',true)
    }
    const go_to = ()=>{
      window.location.href = "/main_page"
    }

    const get_data_for_check = ()=>{
        login_message.value = "";
        console.log(inputValue_userid.value.value)
        let  reg =/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        let  password_reg =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
        if (!reg.test(inputValue_userid.value.value)&&!password_reg.test(inputValue_password.value.value)){
            login_message.value = "账号得是手机号,密码8-16字符,包含大小写与数字"
        }else {
            go_to()
        }
    }

    return{
      inputValue_userid,
      inputValue_password,
      changePanel_to_register,
      go_to,
        get_data_for_check,
        login_message
    }
  }
}
</script>

<style scoped>
#div_login_panel {
  float: right;
  width: var(--area-Welcome-panel-width);
  height: var(--area-Welcome-panel-height-login);
  background: var(--color-div_white);
  text-align: center;
  border-radius: 10px;
  box-shadow: var(--color-box-shadow_blue) 0 0 40px 30px;
}
.font_top {
  width: 50%;
  height: 50px;
  margin: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-weight: bold;
  font-size: var(--fontSize-Welcome-panel-top);
  border-bottom: 2px var(--color-button_color_blue) solid;
}
.panel_animation-enter-active{
  animation: panel_change_enter 1s ;
}
.panel_animation-leave-active{
  animation: panel_change_leave 1s ;
}
input{
    outline: none;
    padding-left: 20px;
    position: relative;
    border: 1.5px solid #f7f7f9;
    width: 315px;
    height: 60px;
    background: #f7f7f9;
    font-size: 20px;
    color: var(--color-font_black);
    border-radius: 7px;
    transition: 0.3s;
    margin-top: 20px;
}
input:hover{
    background: #f3f3f4;
    border: 1.5px solid #f3f3f4;
}
input::placeholder{
    color: var(--color-font_gray);
}
input:focus {
    border: 1.5px solid #5359fd;
}
</style>