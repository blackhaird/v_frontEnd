<template>
    <div class="main">
        <div class="rotation_outer">
            <div class="rotation_button_move_div">
                <button @click="left" class="rotation_button_move">←</button>
                <button @click="right" class="rotation_button_move">→</button>
            </div>
            <div class="rotation_button_div">
                <div class="rotation_button" v-for="item in rotation_img_src" v-bind:key="item"
                     @click="rotation_button_onclick(item.id)" :style="{backgroundImage: 'url('+item.img_src+')'}">
                </div>
            </div>
            <div class="rotation_inner">
                <div class="rotation_inner_img_div" v-for="item in rotation_img_src" v-bind:key="item">
                    <div class="rotation_inner_img_message"
                         :class="{rotation_inner_img_message_animation:img_message_animation}">
                        {{message_title}}<br>
                        <span>
                        {{message_content}}<br>
                            {{message_actor}}
                    </span>
                    </div>
                    <img :src=item.img_src>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {ref} from "vue";


export default {
    name: "Rotation_Main",
    computed: {},
    mounted() {
        this.auto_rotation_move()
    },
    setup() {
        const img_message_animation = ref(false);
        const rotation_img_src = ref([
            {
                "id": 0,
                "img_src": require('@/rotation_page/src/assets/img/1.jpg'),
                "text_title":"Triumph",
                "text_message":"Welcome to the Rose Garden",
                "text_actor":"T-SQUARE"
            },
            {
                "id": 1,
                "img_src": require('@/rotation_page/src/assets/img/2.jpg'),
                "text_title":"ワタシダケユウレイ",
                "text_message":"オリジナルサウンドトラック ",
                "text_actor":"SICK HACK"

            },
            {
                "id": 2,
                "img_src": require('@/rotation_page/src/assets/img/3.jpg'),
                "text_title":"Your Genes Disgust Me",
                "text_message":"The Worst of You",
                "text_actor":"Fish Stick"
            },
            {
                "id": 3,
                "img_src": require('@/rotation_page/src/assets/img/4.jpg'),
                "text_title":"Trash Crash Rock N’ Roll",
                "text_message":"Game Face",
                "text_actor":"Los Crasher"
            },
        ])
        let index = 0;
        let max_index = rotation_img_src.value.length-1;

        const message_title = ref(null);
        const message_content =ref(null)
        const message_actor = ref(null);
        const handle_rotation = () => {
            if (index < 0) {
                index = max_index;
            } else if (index > max_index) {
                index = 0;
            }
            let outer = document.querySelector(".rotation_outer");
            let width = getComputedStyle(outer).width
            width = Number(width.slice(0, -2))
            img_message_animation.value = !img_message_animation.value
            outer.querySelector(".rotation_inner").style.left = index * width * -1  + "px";
            message_title.value = rotation_img_src.value[index].text_title;
            message_content.value = rotation_img_src.value[index].text_message;
            message_actor.value = rotation_img_src.value[index].text_actor;
            setTimeout(()=>{
                console.log("timeOut")
                img_message_animation.value = !img_message_animation.value
            },1000)
        }

        const rotation_button_onclick = (new_index) => {
            index = new_index;
            handle_rotation()
            destory_rotation_move();
            auto_rotation_move();
        }
        const right = () => {
            index++;
            handle_rotation();
            destory_rotation_move();
            auto_rotation_move();
        }
        const left = () => {
            index--;
            handle_rotation();
            destory_rotation_move();
            auto_rotation_move();
        }

        const auto_move_right=()=>{
            index++;
            handle_rotation();
        }

        const timeID = ref(null);
        const auto_rotation_move=()=>{
            timeID.value = setInterval(()=>{
                console.log("move")
                auto_move_right();
            },2000)
        }

        const destory_rotation_move=()=>{
            clearInterval(timeID.value);
            timeID.value=null;
        }

        return {
            rotation_img_src,
            handle_rotation,
            right,
            left,
            rotation_button_onclick,
            index,
            img_message_animation,
            timeID,
            auto_move_right,
            auto_rotation_move,
            destory_rotation_move,

            message_title,
            message_content,
            message_actor,
        }
    }
}
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
}

.main {
    height: 100vh;
    width: 100%;
}

.rotation_outer {
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.rotation_inner {
    width: 450%;
    height: 100vh;
    transition: all 1s;
    position: relative;
}

.rotation_inner .rotation_outer {
    height: 100%;
    position: relative;
    display: flex;
    left: 0;
}

.rotation_inner_img_div {
    flex-shrink: 0;
    object-fit: cover;
    height: 100vh;
    box-shadow: #5f84eb 2px 3px 5px 1px;
    float: left;
}

.rotation_inner_img_div img {
    transition: 1s;
}

.rotation_inner_img_message {
    color: var(--color-bg_white);
    font-size: 90px;
    font-weight: bold;
    top: 28%;
    left: 100px;
    font-family: "Bookman Old Style";
    position: fixed;
}

.rotation_inner_img_message span {
    font-weight: lighter;
    font-size: 50px;
    font-family: Avenir, Helvetica, Arial, 小米兰亭, sans-serif;
    font-weight: bold;
}

.rotation_inner_img_message_animation {
    animation: rotation_font_move 0.5s forwards ease-in-out;
}


.rotation_button_move {
    width: 80px;
    height: 80px;
    background: rgba(43, 45, 48, 0.3);
    font-size: 40px;
    color: white;
    box-shadow: white 2px 2px 10px 2px;
    border-radius: 30px;
    transition: 0.5s;
}

.rotation_button_move:hover {
    background: rgba(30, 31, 34, 0.8);
    box-shadow: none;
}

.rotation_button_div {
    top: 45%;
    right: 0;
    position: absolute;
    z-index: 999;
}

.rotation_button_move_div {
    z-index: 999;
    position: absolute;
    top: 80%;
    left: 40%;
}

.rotation_button {
    width: 220px;
    height: 300px;
    float: left;
    background: no-repeat right;
    background-size: 300%;
    margin-left: 10px;
    box-shadow: rgba(43, 45, 48, 0.8) 10px 10px 30px 5px;
    border-radius: 10px;
    filter: brightness(0.4);
    transition: 1s;
    border: 1px solid white;
}

.rotation_button:hover {
    filter: brightness(1);
}

.rotation_button_move_div button {
    margin: 50px;
}
</style>