<template>
    <div class="sidebar">
        <div class="person">
            <div class="logo"><img src="../../assets/bilibili.png" alt="bilibili"></div>
            <div class="admin">
                <img src="../../assets/touxiang.jpg" alt="bilibili">
                <h2>Yukiko</h2>
                <p>18683370859</p>
            </div>
        </div>
        <div class="menu">
            <el-menu :default-active="onRoutes" class="el-menu-vertical-demo menu-fff" unique-opened router>
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>欢迎页
                </el-menu-item>
                <el-menu-item index="/home">
                    <i class="el-icon-setting"></i>首页
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>表格</template>
                    <el-menu-item index="basetable">基础表格</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-date"></i>表单</template>
                    <el-menu-item index="baseform">基本表单</el-menu-item>
                    <el-menu-item index="vueeditor">编辑器</el-menu-item>
                    <el-menu-item index="markdown">markdown</el-menu-item>
                    <el-menu-item index="upload">文件上传</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                    <el-menu-item index="basecharts">基础图表</el-menu-item>
                    <el-menu-item index="mixcharts">混合图表</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-star-on"></i>弹窗</template>
                    <el-menu-item index="basemodal">右侧弹窗</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-star-on"></i>瀑布流布局</template>
                    <el-menu-item index="basemasonry">columns</el-menu-item>
                    <el-menu-item index="baseMasonryflex">flex</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title"><i class="el-icon-star-on"></i>css3</template>
                    <el-menu-item index="textstroke">text-stroke实现文本描边效果</el-menu-item>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title"><i class="el-icon-star-on"></i>js</template>
                    <el-menu-item index="requestAnimationFrame">requestAnimationFrame</el-menu-item>
                    <el-menu-item index="canvas">canvas</el-menu-item>
                </el-submenu>
                <el-submenu index="9">
                    <template slot="title"><i class="el-icon-star-on"></i>无限滚动</template>
                    <el-menu-item index="VueInfiniteScroll">VueInfiniteScroll</el-menu-item>
                    <el-menu-item index="VueInfiniteLoading">VueInfiniteLoading</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <a class="logOut">退出登录</a>
    </div>
</template>
<script>
import ajax from "@/server"; 
export default {
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    created(){
        // 测试能否正常获取数据
        //ajax.Get('api/news/latest').then((data)=>console.log(data));
    }
}
</script>
<style scoped lang="less">
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 0px;
        bottom:0;
        background: #fff;
        box-shadow: 0px -2px 6px -2px rgba(0,0,0,.2);
        .person{ 
            padding: 20px 0;
            .logo{ text-align: center;
                img{ width: 150px;}
            }
            .admin{ 
                text-align: center;
                img{ width: 60px;border-radius: 50%;}
                h2{ color: #333;font-size: 16px;margin: 10px 0}
                p{ color: #999}
            }
        }
        .menu{
            position: absolute;top: 220px;left: 0;right: 0;bottom: 80px;overflow-y: scroll;
        }
        /*滚动条样式*/
        .menu::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px;
        }
        .menu::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: rgba(0,0,0,0.2);
        }
        .menu::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            border-radius: 0;
            background: rgba(0,0,0,0.1);
        }
        .logOut{ position: absolute;bottom: 20px;width: 100%;box-sizing: border-box;left: 0;
            padding: 0 20px;line-height: 40px;color: #666;font-size: 16px;display: block;
            text-align: center;
        }
        .menu-fff{
            border-radius: 0;
        }
    }
</style>
