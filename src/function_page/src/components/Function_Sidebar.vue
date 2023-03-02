<template>
<div class="div_function_Sidebar_main_display row">
  {{lists_item}}
</div>
</template>

<script>


export default {
  name: "Function_Sidebar",
  props:{
    "lists_item":{
      type:Array
    }
  },
  setup(props){
    console.log(props.lists_item)
    return{
    }
  }
}
</script>

<style scoped>
.div_function_Sidebar_main_display{
  background: antiquewhite;
  width: 40vh;
  height: 100vh;
}
</style>