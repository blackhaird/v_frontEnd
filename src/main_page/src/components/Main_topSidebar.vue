<template>
  <ul id="topSidebar_main">
    <li class="topSidebar_li_father">
      栏目1
      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          1
        </li>
        <li class="topSidebar_li_son">
          2
        </li>
        <li class="topSidebar_li_son">
          3
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      栏目2

      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          1
        </li>
        <li class="topSidebar_li_son">
          2
        </li>
        <li class="topSidebar_li_son">
          3
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      栏目3

      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          1
        </li>
        <li class="topSidebar_li_son">
          2
        </li>
        <li class="topSidebar_li_son">
          3
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      栏目4

      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          1
        </li>
        <li class="topSidebar_li_son">
          2
        </li>
        <li class="topSidebar_li_son">
          3
        </li>
      </ul>
    </li>
    <li class="topSidebar_li_father">
      栏目5

      <ul class="topSidebar_ul_son">
        <li class="topSidebar_li_son">
          1
        </li>
        <li class="topSidebar_li_son">
          2
        </li>
        <li class="topSidebar_li_son">
          3
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Main_topSidebar"
}
</script>

<style scoped>
#topSidebar_main{
  display: flex;
  /*box-shadow: var(--color-box-shadow-blue) 2px 5px 15px 5px;*/
  /*border: var(--color-font_gray) 1px ;*/
  width: 100%;
  height: 4rem;
  color: var(--color-div_white);
}
.topSidebar_li_father{
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
}
.topSidebar_li_father:hover .topSidebar_ul_son{
  display: block;
}
</style>