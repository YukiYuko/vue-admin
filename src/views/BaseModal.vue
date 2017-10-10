<template>
  <div class="baseModal">
      <el-button type="danger" @click.native="$refs.pop1.open()">打开右侧弹窗</el-button>
      <slide ref="pop1"></slide>
  </div>
</template>

<script>
import slide from '@/components/base/Slide.vue';
export default {
    data () {
        return {
            show:false
        }
    },
    components:{
       slide
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>

</style>
