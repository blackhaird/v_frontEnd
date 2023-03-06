<template>
  <button class="X_button_main_css">按钮</button>
</template>

<script>
export default {
  name: "X_button"
}
</script>

<style scoped>
.X_button_main_css{
  width: 315px;
  height: 60px;
  background: var(--color-button_color_blue);
  font-size: 21px;
  color: white;
  font-family: 小米兰亭;
  font-weight: bold;
  border-radius: 7px;
  border: none;
  transition: 0.5s;
}
.X_button_main_css:hover{
  background: var(--color-button_color_hover_blue);
}
.X_button_main_css:active{
  background: #5359fd;
}
</style>