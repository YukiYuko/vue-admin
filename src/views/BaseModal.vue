<template>
  <div class="baseModal">
      <el-button type="danger" @click="show = true">右侧弹窗</el-button>
      <slide :show="show" @close="close"></slide>
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
        close(show){
            this.show = show;
        }
    }
}
</script>
<style lang="less" scoped>

</style>
