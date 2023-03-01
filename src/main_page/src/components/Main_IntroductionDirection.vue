<template>
  <div class="div_mainID_display row-col display_center">
    <transition name="panel_animation">
    <div class="div_mainID_panel panel_animation row">
      <div class="div_mainID_panel_icon row"></div>
      <div class="dic_mainID_panel_message row">
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
  color: var(--color-font_black);
  width: 20rem;
  height: 28rem;
  padding: 3rem;
}
.div_mainID_panel{
  max-width: 100%;
  height: 21rem;
  background: var(--color-div_white);
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
  width: 20rem;
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
  margin-bottom: 50px;
}
.panel_animation-enter-active{
  animation: panel_change_enter 1s ;
}
.panel_animation-leave-active{
  animation: panel_change_leave 1s ;
}

@media screen and (max-width: 1335px){
  .div_mainID_panel{
    max-width: 30vh;
  }
}

@media screen and (max-width: 695px){
  .div_mainID_panel{
    max-width: 50vh;
    height:18vh;
    padding-left:  10px;
  }
  .div_mainID_display{
    height: 25vh;
  }
  .dic_mainID_panel_message{
    display: flex;
    align-items: center;
  }
}

</style>