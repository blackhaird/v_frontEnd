<template>
  <div class="div_MLPF_display">
    <ul>
      <h3>{{list_footer_message[0].title}}</h3>
      <li v-for="item in list_first" v-bind:key="item">{{ item }}</li>
    </ul>
    <ul>
      <h3>{{list_footer_message[1].title}}</h3>
      <li v-for="item in list_second" v-bind:key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>


import {toRefs} from "vue";

export default {
  name: "Main_LastPanelFooter",
  props: {
    list_footer_message:Object
  },
  setup(props) {
    const p = toRefs(props)
    const list_first = p.list_footer_message.value[0].message;
    const list_second = p.list_footer_message.value[1].message;
    console.log()
    return {
      list_first,
      list_second
    }
  }
}
</script>

<style scoped>
.div_MLPF_display {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 90%;
}

.div_MLPF_display ul {
  width: 100%;
  list-style: none;
  color: #5359fd;
}
.div_MLPF_display h3{
  font-size: 25px;
  color: var(--color-font_black);
  margin-left: 35px;

  font-weight: bold;
}
.div_MLPF_display li {
  text-align: center;
  width: 100%;
  height: 5vh;
  transition: 0.2s;
  font-size: 20px;
  margin: 20px;
  color: var(--color-font_black);
}

.div_MLPF_display li:hover {
  background: var(--color-button_color_blue);
  margin-left: 20px;
  transform: scale(1.2);
  color: var(--color-bg_white);
}
</style>