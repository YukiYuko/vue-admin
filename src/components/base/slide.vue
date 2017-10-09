<style lang="less">
    .zc-slide{ position: fixed;top: 0;bottom: 0;right: 0;width: 200px;background-color: #fff;
        box-shadow: -2px 0px 6px -2px rgba(0, 0, 0, 0.2);
    }
</style>

<template> 
    <div class="zc-slide" ref="wrapper">
        <div class="zc-slide-head"></div> 
        <slot></slot> 
        <div class="zc-slide-foot"></div>
    </div> 
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      }
    },
    mounted() {
      
    },
    methods: {
     
    }
  }
</script>