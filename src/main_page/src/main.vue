<template>

  <header>
  </header>

  <div>
    <div id="main_homepage">
      <div class="">
        <Main_topSidebar></Main_topSidebar>
      </div>

      <!--      首页面板-->
      <div class="row div_main_top"></div>
      <div class="row">

        <!--网站主页面封面-->
        <div class="col display_center" id="div_main_message_display">
          <div id="div_main_message_value">
            <h1 class="h1_main_message_title_Chinese">阳光学院教务系统</h1>
            <h3 class="h3_main_message_title_English">Yango School Educational Administration System</h3><br>
            <span class="span_main_message_title_explain">
                          刚健笃实，辉光日新<br>
                          阳光学院（Yango University）位于福建省福州市，是经中华人民共和国教育部批准成立的民办全日制普通高等学校
                          学院创建于2001年，时名福州大学阳光学院，为独立学院；2015年经国家教育部批准，转设为独立设置的民办普通本科高校，
                          并更名为阳光学院。2020年进入中国民办综合性大学排名前十强。2022年入选福建省一流应用型建设高校培育项目。
                        </span>
          </div>
        </div>

        <transition name="div_animation">
          <div class="col display_center" id="div_main_icon_display">
            <div class="div_animation" id="div_main_icon"></div>
          </div>
        </transition>
      </div>

      <!--      项目说明面板-->
      <div class="row" ref="main_title">
        <div class="div_main_item_title row" ref="main_item">
          <h1>关于<span>项目</span></h1>
          <h3>Item <span>Description </span></h3>
        </div>
        <br>
        <div class="div_main_ID_display  row ">
          <div class="div_main_ID_involve_display row ">
            <Main_IntroductionDirection v-for="list in IntroductionDirection_lists" :message_txt="list.message"
                                        :icon_locate="list.icon_locate" :key="list" class="col"
                                        :class="{bottomUp_Start:true,bottomUp_End:ID_show}"/>

          </div>
        </div>
      </div>

      <!--  图片说明    -->
      <div class="row div_main_second_panel_display" ref="second_panel">
        <div class="row"></div>
        <!--        共用Title-->
        <div class="div_main_item_title ">
          <h1>关于<span>项目</span></h1>
          <h3>Item <span>Description </span></h3>
        </div>

        <div class="row">
          <div class="col-lg-4 div_main_second_panel_img_display ">
            <div class="div_main_second_panel_img_first"
                 :class="{div_main_second_panel_img_div_first:second_panel_img_div_show}">
              <img src="./assets/main_second_panel_img.png" class="img_main_second_panel_img_first_start"
                   :class="{img_main_second_panel_img_first:second_panel_img_show}">
            </div>
          </div>

          <div class="col-lg-4 div_main_second_panel_message_display">
            <div style="text-align: center">
              <h1 class="row">阳光学院简章</h1>
              <p class="row">
                Irregular whitespace not allowed no-irregular-whitespace<br>
                Irregular whitespace not allowed no-irregular-whitespace<br>
                Irregular whitespace not allowed no-irregular-whitespace<br>
                Irregular whitespace not allowed no-irregular-whitespace<br>
                Irregular whitespace not allowed no-irregular-whitespace<br>
                Irregular whitespace not allowed no-irregular-whitespace<br>

              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>

  <div>
    <div id="main_div"></div>
  </div>
</template>

<script>
import Main_topSidebar from "@/main_page/src/components/Main_topSidebar.vue";
import Main_IntroductionDirection from "@/main_page/src/components/Main_IntroductionDirection.vue";
import {ref, getCurrentInstance} from "vue";

export default {
  name: "mainApp",
  components: {
    Main_topSidebar,
    Main_IntroductionDirection,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  setup() {
    const currentScroll = ref(0);
    const vm = getCurrentInstance();
    const ID_show = ref(false);
    const second_panel_img_show = ref(false)
    const second_panel_img_div_show = ref(false)
    const handleScroll = () => {
      currentScroll.value = window.pageYOffset;
      if (currentScroll.value >= vm.ctx.$refs.main_item.offsetTop - 800) {
        ID_show.value = true;
      }
      if (currentScroll.value >= vm.ctx.$refs.second_panel.offsetTop - 500) {
        second_panel_img_div_show.value = true
        setTimeout(() => {
          second_panel_img_show.value = true;
        }, 400)
      }
    }

    const IntroductionDirection_lists = ref([
      {
        "icon_locate": "@/",
        "message": "Gitee 是开源中国社区2013年推出的基于 Git 的代码托管服务，目前已经成为国内最大的代码托管平台，致力于为国内开发者提供优质稳定的托管服务。"
      },
      {
        "icon_locate": "@/",
        "message": "GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。2022年4月13日起，GitHub 开始封锁受美国制裁公司的俄罗斯开发者账户。"
      },
      {
        "icon_locate": "@/",
        "message": "GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。2022年4月13日起，GitHub 开始封锁受美国制裁公司的俄罗斯开发者账户。"
      },
      {
        "icon_locate": "@/",
        "message": "GitHub是一个面向开源及私有软件项目的托管平台，因为只支持Git作为唯一的版本库格式进行托管，故名GitHub。2022年4月13日起，GitHub 开始封锁受美国制裁公司的俄罗斯开发者账户。"
      }
    ])
    return {
      IntroductionDirection_lists,
      currentScroll,
      handleScroll,
      ID_show,
      second_panel_img_div_show,
      second_panel_img_show,
    }
  }
}
</script>

<style scoped>
/*
main_homepage的css样式设定
*/
#main_homepage {
  background: url("~@/../public/img/wave-haikei.svg") no-repeat;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

#main_div {
  width: 100%;
  height: 100vh;
}

.div_main_top {
  width: 100%;
  height: 1rem;
}

#div_main_message_display {
  position: relative;
  width: 100%;
  height: 55rem;
}

#div_main_message_value {
  width: 50rem;
  height: 20rem;
  text-align: right;
  padding-right: 20px;
  color: white;
}

#div_main_icon_display {
  position: relative;
  width: auto;
  height: 40rem;
}

#div_main_icon {
  width: 38rem;
  height: 40rem;
  background: url("~@/main_page/src/assets/img/main_mainPanel_icon.svg") no-repeat;
  background-size: 100%;
}

.h1_main_message_title_Chinese {
  text-align: center;
  font-size: var(--fontSize-Main-panel-mainMessageTitle-Chinese);
  font-weight: bold;
}

.h3_main_message_title_English {
  font-size: var(--fontSize-Main-panel-mainMessageTitle-English);
}

.span_main_message_title_explain {
  font-size: var(--fontSize-spanMain-panel-messageTitle_explain);
}

.div_animation {
  animation: main_float 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


/*项目说明面板*/
.div_main_item_title {

  text-align: center;
}

.div_main_ID_display {
  position: relative;

  height: 50vh;
}

.div_main_ID_involve_display {
  position: relative;
  margin: 0 auto;
  width: 150vh;
  height: 50vh;
}

.div_main_item_title h1 {
  font-weight: bold;
  font-size: 4rem;
}

.div_main_item_title span {
  color: var(--color-button_color_blue);
}

/*图片说明面板*/
.div_main_second_panel_display {
  width: 100%;
  height: 100vh;
  background: rebeccapurple;
}

.div_main_second_panel_img_display {
  display: flex;
  align-items: center;
  width: 25%;
  height: 80vh;
}

.div_main_second_panel_message_display {
  width: 75%;
  height: 80vh;
  background: rosybrown;
}

.div_main_second_panel_img_first {
  opacity: 0;
  width: 100%;
  height: 80vh;
  background: var(--color-button_color_blue);
  overflow: hidden;
}

.img_main_second_panel_img_first {
  animation: second_panel_show 1s;
  opacity: 1 !important;
}

.div_main_second_panel_img_div_first {
  animation: second_panel_show 0.5s;
  opacity: 1 !important;
}

.img_main_second_panel_img_first_start {
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
  max-width: 100%;
  width: 100%;
  opacity: 0;
  display: block;
  box-shadow: var(--color-font_gray) -5px 10px 10px 1px;
}
</style>