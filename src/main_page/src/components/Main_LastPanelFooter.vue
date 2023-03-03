<template>
  <div class="div_MLPF_display">
  <ul>
    <li>123</li>
    <li>321</li>
    <li>123</li>
    <li>321</li>
    <li>123</li>
    <li>321</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "Main_LastPanelFooter"
}
</script>

<style scoped>
.div_MLPF_display{
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 20%;
}
.div_MLPF_display ul{
  width: 100%;
  list-style: none;
}
.div_MLPF_display li{
  text-align: center;
  width: 100%;
  height: 5vh;
  transition: 0.2s;
  font-size: 20px;
}
.div_MLPF_display li:hover{
  background: var(--color-button_color_blue);
  margin-left: 20px;
  transform: scale(1.2);
  color: var(--color-bg_white);
}
</style>