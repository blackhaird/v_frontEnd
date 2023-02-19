<template>
  <div id="div_login_panel">
    <div class="font_top">第二面部</div>
    <X_input :input-value="inputValue_userid"></X_input>
    <br><br>
    <X_input :input-value="inputValue_password"></X_input>
    <br><br>

    <span class="row">
              <a class="col" href="welcome.vue">忘记密码</a>
              <a class="col">注册账号</a>
            </span><br><br>
    <!--            <span class="col double_ended_line ">点击</span><br><br>-->
    <X_button class="col"></X_button>
  </div>
</template>

<script>
import X_button from "@/components/X_button.vue";
import X_input from "@/components/X_input.vue";
import {ref} from "vue";
export default {
  name: "Welcome_register_panel",
  components: {
    X_input,
    X_button
  },
  setup(){
    const inputValue_userid = ref("请输入账号");
    const inputValue_password = ref("请输入密码");


    return{
      inputValue_userid,
      inputValue_password,
    }
  }
}
</script>

<style scoped>
#div_login_panel {
  margin-top: 2.5%;
  float: right;
  width: 30rem;
  height: 30rem;
  background: var(--div_white);
  text-align: center;
  border-radius: 10px;
  box-shadow: var(--box-shadow-blue) 0 0 40px 30px;
}
.font_top {
  width: 50%;
  height: 50px;
  margin: auto;
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 2px var(--button_color_blue) solid;
}
</style>