<style lang="less" scoped>
@import url(https://fonts.googleapis.com/css?family=Bangers);
.demo1 {
  font: 8em/1 Bangers, sans-serif;
  text-align: center;
  text-shadow: /* These four shadows create the most outer stroke */
    -.025em -.025em 0 #444,  
    .025em -.025em 0 #444,
    -.025em  .025em 0 #444,
    .025em  .025em 0 #444;
  color: #fff; /* For non-webkit-browsers */
}
.demo2{
    font: 8em/1 Bangers, sans-serif;
    text-align: center;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 6px #f36;
}
.demo3{
    font: 8em/1 Bangers, sans-serif;
    text-align: center;
    background: linear-gradient(-86deg, #EEF85B 5%, #7AEC8D 53%, #09E5C3 91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 6px transparent;
}
.demo4{
    font: 8em/1 Bangers, sans-serif;
    text-align: center;
    background: url(https://unsplash.it/1024/768) no-repeat center;
    -webkit-background-clip: text;  //文本内容之外的背景给裁剪掉
    -webkit-text-fill-color: #fff;  // 文字填充颜色
    -webkit-text-stroke: 6px transparent; // 文字描边 ：宽度 颜色
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

.text {
  fill: none;
  stroke-width: 6;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  animation: stroke 6s infinite linear;
}

.text:nth-child(5n + 1) {
  stroke: #F2385A;
  animation-delay: -1.2s;
}
.text:nth-child(5n + 2) {
  stroke: #F5A503;
  animation-delay: -2.4s;
}

.text:nth-child(5n + 3) {
  stroke: #E9F1DF;
  animation-delay: -3.6s;
}

.text:nth-child(5n + 4) {
  stroke: #56D9CD;
  animation-delay: -4.8s;
}

.text:nth-child(5n + 5) {
  stroke: #3AA1BF;
  animation-delay: -6s;
}


@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
svg {
  font: 14.5em/1 Open Sans, Impact;
}


</style>
<template>
  <div>
     <h1 class="demo1">Y u k i k o</h1>
     <h1 class="demo2">Y u k i k o</h1>
     <h1 class="demo3">Y u k i k o</h1>
     <h1 class="demo4">Y u k i k o</h1>
     <svg viewBox="0 0 1320 300">
        <!-- Symbol -->
        <symbol id="s-text">
            <text text-anchor="middle"
                x="50%" y="50%" dy=".35em">
            Yukiko
            </text>
        </symbol>  
        <!-- Duplicate symbols -->
        <use xlink:href="#s-text" class="text"
            ></use>
        <use xlink:href="#s-text" class="text"
            ></use>
        <use xlink:href="#s-text" class="text"
            ></use>
        <use xlink:href="#s-text" class="text"
            ></use>
        <use xlink:href="#s-text" class="text"
            ></use>
    </svg>
  </div>
</template>

<script>
import vHead from '@/components/common/Header.vue';
import vSidebar from '@/components/common/Sidebar.vue';
export default {
    data () {
        return {
            
        }
    },
    components:{
        vHead, vSidebar
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

