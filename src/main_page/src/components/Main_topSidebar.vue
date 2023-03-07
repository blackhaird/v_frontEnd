<template>
  <ul id="topSidebar_main">
    <img src="~@/../public/img/logo_white.png" >
    <li class="topSidebar_li_father">
      主页
      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son" @click="go_to">
          功能主页
        </li>
        <li class="topSidebar_li_son">
          等待更新
        </li>
        <li class="topSidebar_li_son">
          等待更新
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      更新
      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          版本说明
        </li>
        <li class="topSidebar_li_son">
          功能更新
        </li>
        <li class="topSidebar_li_son">
          未来期望
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      日志
      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          每日日志
        </li>
        <li class="topSidebar_li_son">
          项目日志
        </li>
        <li class="topSidebar_li_son">
          修复日志
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      关于我们
      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          加入我们
        </li>
        <li class="topSidebar_li_son">
          版权说明
        </li>
        <li class="topSidebar_li_son">
          未来发展
        </li>
      </ul>
    </li>
    <div class="topSidebar_name_display ">
    <p class="topSidebar_name">Welcome you : @XJW</p>
    </div>
  </ul>
</template>

<script>
export default {
  name: "Main_topSidebar",
  setup(){
    const go_to = ()=>{
      window.location.href = "/function_page"
    }
    return{
      go_to
    }
  }
}
</script>

<style scoped>
#topSidebar_main{
  display: flex;
  /*box-shadow: var(--color-box-shadow-blue) 2px 5px 15px 5px;*/
  /*border: var(--color-font_gray) 1px ;*/
  width: 100%;
  height: 4rem;
  list-style-type:none;
  color: var(--color-div_white);
  transition: 0.5s;
  position:fixed;z-index:999
}
.topSidebar_li_father{
  transition: 0.5s;
  width: 9rem;
  height: 4rem;
  line-height: 4rem;
  align-items: center;
  text-align: center;
}
.topSidebar_ul_son{
  display: none;
  width: 100%;
  height: 4rem;
  list-style-type:none;
}
.topSidebar_li_son{
  transition: 0.5s;
  background: var(--color-topSidebar-li_blue);
}
.topSidebar_li_father:hover .topSidebar_ul_son{
  display: block;
}
.topSidebar_li_father:hover{
  background: var(--color-button_color_hover_blue);
  transform: scale(1.05);
  cursor:pointer;
}
.topSidebar_li_son:hover{
  background: var(--color-button_color_hover_blue);
  transform: scale(1.05);
  margin-left: 20px;
}
.topSidebar_name_display{
  width: 55%;
  line-height: 60px;
}
.topSidebar_name{
  text-align: right;
}

@media screen and (max-width: 700px) {
 .topSidebar_name{
   display: none;
 }
  .topSidebar_li_father{
    font-size: 12px;
  }
}
</style>