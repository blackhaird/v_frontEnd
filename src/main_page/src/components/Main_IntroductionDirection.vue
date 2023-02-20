<template>
  <div class="div_mainID_display display_center">
    <div class="div_mainID_panel">
      <div class="div_mainID_panel_icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main_IntroductionDirection"

}
</script>

<style scoped>
.div_mainID_display{
  width: 300px;
  height: 500px;
  background: #8b8c8f;
}
.div_mainID_panel{
  width: 250px;
  height: 400px;
  background: chartreuse;
  display: flex;
  justify-content: center;
}
.div_mainID_panel_icon{
  width: 100px;
  height: 100px;
  background: fuchsia;
  margin-top: 2rem;
}
</style>