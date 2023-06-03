<template>
    <input class="X_input_main_css" :placeholder="props['inputValue']">
</template>

<script>
export default {
  name: "X_input",
  props:{
     inputValue:{
       type: String,
       default:"",
     }
  },
  setup(props){
    console.log(props.inputValue);
    return{
      props
    }
  }
}
</script>
<style scoped>
input {
  outline: none;
  padding-left: 20px;
  position: relative;
  border: 1.5px solid #f7f7f9;
}
input:hover{
  border: 1.5px solid #f3f3f4;
}
input::placeholder{
  color: var(--color-font_gray);
}
input:focus {
  border: 1.5px solid #5359fd;
}
.X_input_main_css{
  width: 315px;
  height: 60px;
  background: #f7f7f9;
  font-size: 20px;
  color: var(--color-font_black);
  border-radius: 7px;
  border: 0;
  transition: 0.3s;
}
.X_input_main_css:hover{
  background: #f3f3f4;
}
</style>