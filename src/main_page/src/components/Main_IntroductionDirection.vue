<template>
  <div class="div_mainID_display display_center">
    <transition name="panel_animation">
    <div class="div_mainID_panel row panel_animation ">
      <div class="div_mainID_panel_icon row"></div>
      <div class="dic_mainID_panel_message row-col">
        {{message_txt}}
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Main_IntroductionDirection",
  props:{
    icon_locate:{
      type:String
    },
    message_txt:{
      type:String
    }
  },
  setup(){
    return{

    }
  }
}


</script>

<style scoped>
.div_mainID_display{
  width: 300px;
  height: 500px;
  color: var(--color-font_black);
}
.div_mainID_panel{
  width: 18rem;
  height: 23rem;
  background: var(--color-div_white);
  display: flex;
  justify-content: center;
  border-radius: 15px 20px 60px 10px;
  transition: 0.5s;
  border: 1px var(--color-font_gray) solid;
  box-shadow: var(--color-box-shadow_blue) 15px 5px 20px 3px;
}
.div_mainID_panel_icon{
  width: 90px;
  height: 90px;
  background: fuchsia;
  margin-top: 2rem;
}
.dic_mainID_panel_message{
  width: 15rem;
  height: 10rem;
  font-size: 0.9rem;
}
.div_mainID_panel:hover{
  position: relative;
  transform: scale(1.05);
  box-shadow: none;
  background-color: #5359fd;
  background-image: linear-gradient(225deg, #5359fd 1%, #5359fd 27%, #5f84eb 69%);
  color: var(--color-div_white);
  margin-bottom: 3rem;
}
.panel_animation-enter-active{
  animation: panel_change_enter 1s ;
}
.panel_animation-leave-active{
  animation: panel_change_leave 1s ;
}

</style>