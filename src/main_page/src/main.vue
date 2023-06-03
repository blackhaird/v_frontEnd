<template>

  <header>
  </header>

  <div>
    <div id="main_homepage">
      <div class="">
        <Main_topSidebar :class="{topSidebar_bg_blue:top_sidebar}"></Main_topSidebar>
      </div>
      <!--      首页面板 引用了网格布局实现自适应布局-->
      <div class="row div_main_panel">
        <div class="div_main_panel_display row">
          <div class="row"></div>
          <!--网站主页面封面-->
          <div class="col display_center" id="div_main_message_display">
            <div id="div_main_message_value">
              <h1 class="h1_main_message_title_Chinese">网页在线音乐平台</h1>
              <h3 class="h3_main_message_title_English">Web-based music platform</h3><br>
              <span class="span_main_message_title_explain">
                          在线音乐作为随身听产品的鼻祖，索尼在被苹果公司以iPod+iTunes软硬件相结合的模式打败后，在2004年也宣布开始Connect在线数字音乐商店，以付费下载数字音乐文件的模式，希望能令其Walkman产品从苹果手中夺回冠军宝座。在当年索尼效仿苹果开始这一服务时，由于其具有20多年音乐随身听的硬件技术基础，加上完整的家电数码产品线，更具备自己的唱片和电影公司，因其综合资源上的优势曾被业界寄予厚望，
            </span><br>
            </div>
          </div>
          <div class="div_main_button_style row display_none">
            <X_button class="div_main_button"></X_button>
          </div>
          <transition name="div_animation">
            <div class="col display_center" id="div_main_icon_display">
              <div class="div_animation" id="div_main_icon"></div>
            </div>
          </transition>
        </div>
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
      <div class=" div_main_second_panel_display" ref="second_panel">
        <div class="row" style="height: 3vh"></div>
        <!--        共用Title-->
        <div class="div_main_item_title ">
          <h1>关于<span>项目</span></h1>
          <h3>Item <span>Description </span></h3>
        </div>

        <div class="row">

          <div class="div_main_second_panel_img_display display_center">
            <div class="div_main_second_panel_img_first"
                 :class="{div_main_second_panel_img_div_first:second_panel_img_div_show}">
              <img src="./assets/main_second_panel_img.png" class="img_main_second_panel_img_first_start"
                   :class="{img_main_second_panel_img_first:second_panel_img_show}">
            </div>
          </div>

          <div class=" div_main_second_panel_message_display display_center row">
            <div class="div_main_second_panel_message_bg"
                 :class="{animation_main_second_panel_message_bg:second_panel_message_bg_show}">
              <div class="div_main_second_panel_message_p"
                   :class="{animation_main_second_panel_message_p:second_panel_message_p_show}">
                <h1 class="row">音乐随时享受</h1>
                <p class="row">
                  在线音乐是通过互联网传输和播放的音乐。它可以通过各种方式访问，例如流媒体服务、数字音乐下载、<br>
                  在线广播和社交媒体平台等。<br>
                  在线音乐具有便利性和多样性，用户可以随时随地访问和听取各种类型的音乐，<br>
                  而且通常比传统的音乐购买方式更经济实惠。
                  在线音乐平台通常提供个性化推荐功能，根据用户的喜好推荐音乐，<br>也可以让用户创建自己的播放列表或收藏歌曲。
                  在线音乐也为艺术家和唱片公司提供了一种新的发行和宣传方式，<br>同时也为音乐产业带来了新的商业模式。
                  许多在线音乐平台允许用户创建自己的音乐社交账号，<br>分享自己的音乐、收听别人的音乐，与其他音乐爱好者互动。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="row div_main_third_panel_display">
        <div class="div_main_third_panel_firstP_display col">

          <div class="div_main_third_panel row">
            <div class="col div_main_third_panel_message ">
              <h1 class="row">华语乐坛</h1>
              <p class="row">
                随着中国经济的逐渐强大，富足而安定的生活为中国流行音乐提供了一个良好的温床，有利于我们对西方流行乐的更深层次的理解。使得来至于西方的流行音乐在中国不光是结合了很多的中国特色，中国元素，同时还会有其他国家与民族的音乐灵魂注入，使得中国的流行音乐更加多元化，创造出独具特色的中国流行音乐。</p>
            </div>
            <div class="col div_main_third_panel_firstP_img display_center">
              <img src="./assets/img/main_thirdPanel_Author_first.png" class="img_main_third_panel_firstP col">
            </div>
          </div>

        </div>
        <div class="div_main_third_panel_secondP_display col">
          <div class="div_main_third_panel row">
            <div class="col div_main_third_panel_secondP_img display_center">
              <img src="./assets/img/main_thirdPanel_Author_second.png" class="img_main_third_panel_secondP col">
            </div>
            <div class="div_main_third_panel_message col">
              <h1 class="row">欧美乐坛</h1>
              <p class="row">
                历史上著名的摇滚歌手和乐队有：甲壳虫乐队(披头士)，滚石乐队，皇后乐队，U2乐队，R.E.M，涅槃乐队，枪炮与玫瑰，Metallica乐队，邦乔维，Suede，老鹰乐队，黑色安息日，齐柏林飞船，平克·弗洛伊德，蝎子乐队，AC/DC，slipknot乐队等。此排名出自CCTV电视指南频道《数字飙榜之欧美十大摇滚乐队》。</p>
            </div>
          </div>

        </div>
      </div>
      <!--      <div class="div_main_item_title row" ref="main_item">-->
      <!--        <h1>关于<span>项目</span></h1>-->
      <!--        <h3>Item <span>Description </span></h3>-->
      <!--      </div>-->

      <div class=" div_main_last_panel_display row">
        <div class="div_last_panel_title_display display_center">
          <div class="div_last_panel_title">
            <h1 class="row">搜索</h1>
            <h3 class="row">Search</h3>
          </div>
        </div>

        <div class="div_main_last_panel_search_display row ">
          <div class="div_main_last_panel_search row display_center">
            <x_input class="input_last_panel_search" :input-value="last_panel_search_input_placeholder"></x_input>
          </div>
        </div>
        <div class="col display_center">
          <div class="col div_main_last_panel_img_display">
            <img src="~@/../public/img/logo.png" class="div_main_last_panel_img col">
          </div>
        </div>
        <div class="col display_center">
          <div class="div_main_last_panel_message_display">
            <p>
              在线音乐作为随身听产品的鼻祖，索尼在被苹果公司以iPod+iTunes软硬件相结合的模式打败后，在2004年也宣布开始Connect在线数字音乐商店，以付费下载数字音乐文件的模式，希望能令其Walkman产品从苹果手中夺回冠军宝座。在当年索尼效仿苹果开始这一服务时，由于其具有20多年音乐随身听的硬件技术基础，加上完整的家电数码产品线，更具备自己的唱片和电影公司，因其综合资源上的优势曾被业界寄予厚望，
              <br>
              XJW@2023.3.7
            </p>
          </div>
        </div>
        <div class="div_mian_last_panel_footerList_display col">
          <main_LastPanelFooter :list_footer_message="list_footer_message"></main_LastPanelFooter>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import Main_topSidebar from "@/main_page/src/components/Main_topSidebar.vue";
import Main_IntroductionDirection from "@/main_page/src/components/Main_IntroductionDirection.vue";
import x_input from "@/components/X_input.vue";
import main_LastPanelFooter from "@/main_page/src/components/Main_LastPanelFooter.vue";
import {ref, getCurrentInstance} from "vue";
import X_button from "@/components/X_button.vue";

export default {
  name: "mainApp",
  components: {
    X_button,
    Main_topSidebar,
    Main_IntroductionDirection,
    main_LastPanelFooter,
    x_input
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  setup() {
    const currentScroll = ref(0);

    const top_sidebar = ref(false)

    const vm = getCurrentInstance();
    const ID_show = ref(false);

    const second_panel_img_show = ref(false);
    const second_panel_img_div_show = ref(false);
    const second_panel_message_bg_show = ref(false);
    const second_panel_message_p_show = ref(false);

    const last_panel_search_input_placeholder = ref("搜索 Search");

    const handleScroll = () => {
      currentScroll.value = window.pageYOffset;
      console.log(currentScroll.value)
      if (currentScroll.value <= 900) {
        top_sidebar.value = false
      }
      if (currentScroll.value >= 900) {
        top_sidebar.value = true
      }
      if (currentScroll.value >= vm.ctx.$refs.main_item.offsetTop - 800) {
        ID_show.value = true;
      }
      if (currentScroll.value >= vm.ctx.$refs.second_panel.offsetTop - 500) {
        second_panel_img_div_show.value = true
        second_panel_message_bg_show.value = true
        setTimeout(() => {
          second_panel_img_show.value = true;
          second_panel_message_p_show.value = true;
        }, 450)
      }
    }

    const IntroductionDirection_lists = ref([
      {
        "icon_locate": "network.svg",
        "message": "随时享受是MusicOnline的宗旨，以网络作为数据传输的通道，随时随地的享受音乐。本网站建立之初就以云端服务作为主要内容，主打轻量化与多端可用，极大的促成用户的轻量化与便利性。"
      },
      {
        "icon_locate": "service.svg",
        "message": "社交方便是MusicOnline的理想,让用户可用在网络上分享音乐，简便的分享与讨论。本网站一直以轻量化分享为基准，无需用户下载APP，点击链接即可完成分享"
      },
      {
        "icon_locate": "safety.svg",
        "message": "信息安全是MusicOnline的安全，用户没有任何隐私性的内容输入到本网站，我们也只需要用户的基础数据，用户也没有任何信息存在于我们的服务器上，网络攻击不会对用户有所影响"
      },
      {
        "icon_locate": "money.svg",
        "message": "减少开支是MusicOnline的底线，我们不需要用户支付大量的费用，MusicOnline的想法是让用户用最小的支出换得最大的体验。甚至我们的想法是做到用户免费就可以使用我们的功能"
      }
    ])

    const list_footer_message = ref([
      {
        "title": "音乐平台",
        "message": ["关于我们", "联系我们", "用户协议", "加入我们"]
      },
      {
        "title": "链接传送",
        "message": ["友情链接", "协议汇总", "广告合作", "社区中心"]
      }
    ])

    return {
      IntroductionDirection_lists,
      currentScroll,
      handleScroll,

      top_sidebar,

      ID_show,

      second_panel_message_p_show,
      second_panel_message_bg_show,
      second_panel_img_div_show,
      second_panel_img_show,

      last_panel_search_input_placeholder,

      list_footer_message,
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
  height: auto;
}

.div_main_panel {
  height: auto;
}

.div_main_panel_display {
  width: 100%;
  height: auto;
  margin-top: 12vh;
}

#div_main_message_display {
  position: relative;
  width: 100%;
  height: 45rem;
}

#div_main_message_value {
  width: 50rem;
  height: 30rem;
  text-align: right;
  padding-right: 20px;
  color: var(--color-secondPanel-bg_white);
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

.div_main_button {

  background: var(--color-musicPanel-bgFont_black);
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
  margin-top: 50px;
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


@media screen and (max-width: 1335px) {
  .div_main_ID_display {
    height: 100vh;
  }

  .div_main_ID_involve_display {
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 695px) {

  .div_main_ID_display {
    height: 120vh;
  }

  .div_main_ID_involve_display {
    height: 110vh;
  }
}

@media screen and (max-width: 573px) {
  .div_main_ID_display {
    height: 180vh;
  }

  .div_main_ID_involve_display {
    height: 180vh;
  }
  .div_main_panel_display{
    height: 170vh;
  }
}

@media screen and (max-width: 375px) {
  .div_main_ID_involve_display {
    height: 190vh;
  }
  .div_main_last_panel_display{
    height: 200vh;
  }

  .div_main_ID_display {
    height: 210vh;
  }

}

/*图片说明面板*/
.div_main_second_panel_display {
  width: 100%;
  height: 110vh;
  background: #f0f4f8;

}

.img_main_second_panel_img_first_start {
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: block;
}

.div_main_second_panel_img_first {
  opacity: 0;
  width: 75%;
  height: 100%;
  background: var(--color-secondPanel-bg_blue);
  overflow: hidden;
}

.div_main_second_panel_img_display {
  display: flex;
  align-items: center;
  width: 30%;
  height: 80vh;
  /*background: red;*/
}

.div_main_second_panel_message_display {
  width: 70%;
  height: 80vh;
  /*background: yellow;*/
}

@media screen and (max-width: 1500px) {
  .div_main_second_panel_img_first {
    width: 100%;
  }
}

@media screen and (max-width: 1320px) {
  .div_main_second_panel_img_display {
    width: 40%;
  }

  .div_main_second_panel_message_display {
    width: 60%;
  }
}

@media screen and (max-width: 900px) {
  .div_main_second_panel_img_display {
    width: 45%;
  }

  .div_main_second_panel_message_display {
    width: 55%;
  }
}

@media screen and (max-width: 700px) {
  .div_main_second_panel_img_display {
    width: 100%;
    height: 40%;
  }
  .div_main_second_panel_display {
    height: 170vh;
  }

  .div_main_second_panel_message_display {
    width: 100%;
  }

  .div_main_second_panel_img_first {
    width: 60%;
    height: 50%;
  }

  #main_homepage {
    height: 250vh;
  }
}


.div_main_second_panel_message_bg {
  width: 80%;
  height: 50vh;
  background: var(--color-button_color_blue);
  color: var(--color-bg_white);
  text-align: center;
  opacity: 0;
}

.div_main_second_panel_message_p {
  opacity: 0;
  text-align: left;
}

.div_main_second_panel_message_p h1 {
  font-weight: bold;
  font-size: 50px;
}

.div_main_second_panel_message_p p {
  font-size: 20px;

}


.animation_main_second_panel_message_bg {
  animation: second_panel_message_show 2s;
  opacity: 1 !important;
}

.animation_main_second_panel_message_p {
  animation: second_panel_message_p_show 2s;
  opacity: 1 !important;
}

.img_main_second_panel_img_first {
  animation: second_panel_show 3s;
  opacity: 1 !important;
}

.div_main_second_panel_img_div_first {
  animation: second_panel_show 2s;
  opacity: 1 !important;
}


/*第三页面*/
.div_main_third_panel_display {
  width: 100%;
  height: auto;
  background: var(--color-musicPanel-bg_black);
}

.div_main_third_panel_firstP_display {
}

.div_main_third_panel_secondP_display {
}

.div_main_third_panel {
  height: 60vh;
  overflow: hidden;
}

.div_main_third_panel_message {
  margin-top: 5rem;
  color: var(--color-bg_white);
}

.div_main_third_panel_message h1 {
  font-size: 45px;
  text-align: center;
  font-weight: bold;
}

.div_main_third_panel_message p {
  font-size: 20px;
  margin-top: 10px;
}

.div_main_third_panel_firstP_img {
  width: 30%;
}

.div_main_third_panel_secondP_img {
  width: 30%;
}

.img_main_third_panel_secondP {
  width: 38vh;
}

.img_main_third_panel_firstP {
  width: 38vh;
}

@media screen and (max-width: 1550px) {
  .img_main_third_panel_secondP {
    width: 24vh;
  }

  .img_main_third_panel_firstP {
    width: 38vh;
  }

  .div_main_third_panel_message {
    height: 40vh;
  }
}

@media screen and (max-width: 1220px) {
  .div_main_third_panel {
    height: 55vh;
  }

  .div_main_third_panel_message {
    height: 30vh;
  }

  .div_main_third_panel_display {
    height: 50vh;
  }

  .div_main_third_panel_message h1 {
    font-size: 27px;
    text-align: center;
    font-weight: bold;
  }

  .div_main_third_panel_message p {
    font-size: 15px;
    margin-top: 10px;
  }

}

@media screen and (max-width: 976px) {
  .div_main_second_panel_message_bg {
    height: 80vh;
  }

  .img_main_third_panel_secondP {
    width: 24vh;
  }

  .img_main_third_panel_firstP {
    width: 25vh;
  }

  .div_main_third_panel_message h1 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
  }

  .div_main_third_panel_message p {
    font-size: 15px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 700px) {
  .div_main_third_panel_display {
    height: 110vh;
  }

  .div_main_second_panel_message_bg {
    height: 60vh;
  }

  .div_main_second_panel_message_p h1 {
    font-weight: bold;
    font-size: 30px;
  }

  .div_main_second_panel_message_p p {
    font-size: 17px;

  }

  .img_main_third_panel_secondP {
    width: 24vh;
  }

  .img_main_third_panel_firstP {
    width: 38vh;
  }

  .div_main_third_panel_message {
    height: 40vh;
  }
  .div_main_third_panel_message p{
    font-size: 12px;
  }

}

@media screen and (max-width: 380px) {
  .div_main_second_panel_message_p h1 {
    font-weight: bold;
    font-size: 18px;
  }
  .div_main_second_panel_message_p p {
    font-size: 10px;
  }

  .div_main_second_panel_message_bg {
    height: 40vh;
  }

  .div_main_second_panel_display {
    height: 180vh;
  }

}

/*最后页面*/
.div_main_last_panel_display {
  width: 100%;
  height: 70vh;
  background: var(--color-secondPanel-bg_white);
}

.input_last_panel_search {
  width: 50vh;
  height: 10vh;
  border: 1px var(--color-button_color_blue) solid;
}

.input_last_panel_search:hover {
  transform: scale(1.1);
  border: 1px var(--color-button_color_blue) solid;
}

.div_last_panel_title_display {
  position: relative;
  width: 100%;
  height: 20vh;
  text-align: center;
}

.div_last_panel_title {
  height: 20vh;
}

.div_last_panel_title h1 {
  margin-top: 5vh;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: var(--color-button_color_blue);
}

.div_mian_last_panel_footerList_display {
  width: 100%;
  height: 40vh;
  position: relative;
}

.div_main_last_panel_img {
  float: right;
  width: 30vh;
}

.div_main_last_panel_message_display {
  width: 500px;
  text-align: left;
}
/*板块自适应功能*/
@media screen and (max-width: 1170px) {
  .div_main_last_panel_display {
    height: 100vh;
  }

  .div_main_last_panel_message_display {
    width: 50vh;
    text-align: left;
  }

  .div_main_last_panel_img {
    clear: both;
    width: 30vh;
  }
}

@media screen and (max-width: 840px) {
  .div_main_last_panel_message_display {
    font-size: 15px;
    width: 40vh;
    text-align: left;
  }

  .div_main_last_panel_img {
    clear: both;
    width: 20vh;
  }
}

@media screen and (max-width: 547px) {
  .div_main_last_panel_message_display {
    font-size: 15px;
    width: 30vh;
    text-align: left;
  }
  .div_main_last_panel_display {
    height: 130vh;
  }

  .div_main_last_panel_message_display {
    clear: both;
    width: 100%;
    font-size: 1%;
  }

}
@media screen and (max-width: 643px) {
  .div_main_last_panel_img{
    width: 100%;
  }
}
@media screen and (max-width: 547px) {
  .div_main_last_panel_img{
    width: 100%;
  }
  .div_main_last_panel_img_display{
  }
  .div_main_last_panel_message_display{
    width: 30vh;
  }
  .div_main_last_panel_display {
    height:100vh;
  }
}
</style>