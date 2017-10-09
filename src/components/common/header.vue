<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            
        },
        methods:{
            
        }
    }
</script>
<style scoped lang="less">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        color: #fff;
        background-color: #23262E;
        .logo{
            position: absolute;
            left: 0;
            top: 0;
            width: 220px;
            height: 100%;
            line-height: 60px;
            text-align: center;
            color: #009688;
            font-size: 16px;
        }
        .user-info {
            position: relative;
            padding-left: 220px;
            height: 60px;line-height: 60px;
        }
    }
</style>
