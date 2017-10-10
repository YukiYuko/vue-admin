<style lang="less">
    .zc-slide{ position: fixed;top: 0;bottom: 0;right: 0;width: 300px;background-color: #fff;
        box-shadow: -2px 0px 6px -2px rgba(0, 0, 0, 0.2);z-index: 100;
        .zc-slide-head{
            height: 45px;line-height: 45px;box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
            padding: 0 20px;
            i{ line-height: 45px;cursor: pointer;}
        }
        .zc-slide-content{ position: absolute;top: 45px;bottom: 50px;left: 0;right: 0;}
        .zc-slide-foot{ position: absolute;bottom: 0;width: 100%;left: 0;text-align: center;padding: 7px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
    }
    .popup-animate-right-enter, .popup-animate-right-leave-active {
        transform: translate3d(100%, 0, 0);
    }
</style>

<template> 
    <div>
        <overlay :show="mutableShow" :opacity="0.5" :click="close"></overlay>
        <transition name="popup-animate-right">
            <div class="zc-slide transition" v-show="mutableShow">
                <div class="zc-slide-head clearfix">
                    <span class="fl">{{title}}</span>
                    <i class="el-icon-circle-close fr" @click="close"></i>
                </div> 
                <div class="zc-slide-content">
                    <slot></slot> 
                </div>
                <div class="zc-slide-foot">
                    <el-button type="success">确定</el-button>
                    <el-button type="danger">取消</el-button>
                </div>
            </div>
        </transition> 
    </div>
</template>
<script type="text/ecmascript-6">
  import Overlay from './Overlay'
  export default {
    props: {
      show: {
          type:Boolean,
          default:false
      },
      title: {
        type: String,
        default: '这是默认标题哦'
      }
    },
    data () {
        return {
            mutableShow: this.show
        }
    },
    components: {
        Overlay
    },
    mounted() {
      
    },
    methods: {
        open () {
            this.mutableShow = true;
            this.$emit('open', this);
        },
        close () {
            this.mutableShow = false;
            this.$emit('close', this);
        }
    }
  }
</script>