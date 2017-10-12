<template>
    <div>
        <div class="show-container">
            <div ref="myDiv1" id="myDiv1" style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;" class="progress">{{value1}}%</div>
            <button class="btn" id="btn1" @click="_setInterval">Run</button>
        </div>
        <div class="show-container">
            <div ref="myDiv2" id="myDiv2" style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;" class="progress">{{value2}}%</div>
            <button class="btn" id="btn2" @click="_setTimeout">Run</button>
        </div>
        <div class="show-container">
            <div ref="myDiv3" id="myDiv3" style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;" class="progress">{{value3}}%</div>
            <button class="btn" id="btn3" @click="_requestAnimationFrame">Run</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 0,
            value3: 0,
            time1: '',
            time2: '',
            time3: ''
        }
    },
    components: {

    },
    mounted() {

    },
    methods: {
        _setInterval() {
            clearInterval(this.time1);
            myDiv1.style.width = 0;
            this.time1 = setInterval(() => {
                if (parseInt(myDiv1.style.width) < 500) {
                    myDiv1.style.width = parseInt(myDiv1.style.width) + 5 + 'px';
                    this.value1 = parseInt(myDiv1.style.width) / 5;
                } else {
                    clearInterval(this.time1);
                }
            }, 16)
        },
        _setTimeout() {
            clearTimeout(this.time2);
            myDiv2.style.width = 0;
            var _this = this;
            this.time2 = setTimeout(function fn() {
                if (parseInt(myDiv2.style.width) < 500) {
                    myDiv2.style.width = parseInt(myDiv2.style.width) + 5 + 'px';
                    _this.value2 = parseInt(myDiv2.style.width) / 5;
                    _this.time2 = setTimeout(fn, 16);
                } else {
                    clearInterval(_this.time2);
                }
            }, 16);
        },
        _requestAnimationFrame() {
            /**
             * requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
            在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量
            requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销
            */
            cancelAnimationFrame(this.time3);
            myDiv3.style.width = 0;
            var _this = this;
            this.time3 = requestAnimationFrame(function fn() {
                if (parseInt(myDiv3.style.width) < 500) {
                    myDiv3.style.width = parseInt(myDiv3.style.width) + 5 + 'px';
                    _this.value3 = parseInt(myDiv3.style.width) / 5;
                    _this.time3 = requestAnimationFrame(fn, 16);
                } else {
                    cancelAnimationFrame(_this.time3);
                }
            }, 16);
        }
    }
}
</script>
<style lang="less" scoped>
.show-container {
    text-align: center;
    width: 500px;
    margin-bottom: 20px;
}


.progress {
    position: relative;
    width: 100%;
    height: 20px;
    background-color: #e7edf4;
    border-radius: 99px;
    margin-bottom: 20px;
    text-align: left;
}

button {
    cursor: pointer;
    color: #1F2225;
    font-weight: 400;
    text-decoration: none;
    border: 2px solid #525961;
    padding: 10px 25px;
    transition: all .15s ease-in-out;
    &:hover {
        background-color: #525961;
        color: #fff;
    }
}
</style>
