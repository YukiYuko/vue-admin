<template>
    <Row :gutter="16">
        <Col span="6">
            <div class="number">col-6</div>
        </Col>
        <Col span="6">
            <div class="number">col-6</div>
        </Col>
        <Col span="6">
            <div class="number">col-6</div>
        </Col>
        <Col span="6">
            <div class="number">col-6</div>
        </Col>
    </Row>
</template>

<script>
    export default {
        data() {
            
        },
        computed:{
            
        },
        methods:{
            
        }
    }
</script>
<style scoped lang="less">
    .number{  color: #fff;padding: 10px 0;text-align: center;background: rgba(0,153,229,.9);}
</style>
