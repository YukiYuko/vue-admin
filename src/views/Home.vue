<style scoped lang="less">
*,
*::before,
*::after {
  box-sizing: border-box;
}

.home {
  .public-header {
    margin-bottom: 40px;
    .fl {
      padding: 10px 0px;
      font-size: 14px;
    }
  }
  .main {
    .grid-content {
      height: 100px;
      background-color: #fff;
      margin-bottom: 20px;
    }
    .el-icon {
      color: #8492a6;
      margin: 0 20px;
      font-size: 18px;
      vertical-align: middle;
    }
  }
} // 图标样式
.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  background-color: #ffffff;
}

.icon-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  height: 120px;
  line-height: 120px;
  color: #666;
  font-size: 13px;
  transition: color .15s linear;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px
}

.icon-list li:after {
  content: "";
  height: 100%
}

.icon-list li:after,
.icon-list li span {
  display: inline-block;
  vertical-align: middle
}

.icon-list li span {
  line-height: normal;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  color: #99a9bf
}

.icon-list li i {
  display: block;
  font-size: 24px;
  margin-bottom: 15px;
  color: #8492a6
}

.icon-list li:hover {
  color: #5cb6ff
}

// card
.card {
  margin: 50px auto;
  padding: 20px;
  width: 355px;
  background-color: #fff;
  box-shadow: 5px 5px 30px rgba(84, 29, 29, 0.4);
}

.card-title {
  color: #541d1d;
  font-size: 22px;
}

.card-text {
  margin-top: 8px;
  line-height: 1.3;
}

.card-image {
  margin-top: 10px;
}
</style>
<template>
  <div class="home">
    <div class="public-header clearfix">
      <span class="fl">基础组件</span>
      <el-button class="fr bg-color-fff transition" type="info">信息按钮</el-button>
    </div>
    <div class="main">
      <h1 v-touch-ripple>H1</h1>
      <blockquote class="quote" v-touch-ripple>布局</blockquote>
      <div class="mgb15">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content grid-content1"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content grid-content1"></div>
          </el-col>
        </el-row>
      </div>

      <blockquote class="quote">button</blockquote>
      <div class="mgb15">
        <el-button class="mgb15">默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button :plain="true" :disabled="true">主要按钮</el-button>
        <el-button type="primary" :disabled="true">主要按钮</el-button>
        <el-button type="text" :disabled="true">文字按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button :plain="true" type="success">成功按钮</el-button>
        <el-button :plain="true" type="warning">警告按钮</el-button>
        <el-button :plain="true" type="danger">危险按钮</el-button>
        <el-button :plain="true" type="info">信息按钮</el-button>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">上传
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        <el-button type="primary" :loading="true">加载中</el-button>
      </div>

      <blockquote class="quote">图标</blockquote>
      <div class="mgb15">
        <ul class="icon-list">
          <li>
            <span>
              <i class="el-icon-arrow-down"></i> el-icon-arrow-down </span>
          </li>
          <li>
            <span>
              <i class="el-icon-arrow-left"></i> el-icon-arrow-left </span>
          </li>
          <li>
            <span>
              <i class="el-icon-arrow-right"></i> el-icon-arrow-right </span>
          </li>
          <li>
            <span>
              <i class="el-icon-arrow-up"></i> el-icon-arrow-up </span>
          </li>
          <li>
            <span>
              <i class="el-icon-caret-bottom"></i> el-icon-caret-bottom </span>
          </li>
          <li>
            <span>
              <i class="el-icon-caret-left"></i> el-icon-caret-left </span>
          </li>
          <li>
            <span>
              <i class="el-icon-caret-right"></i> el-icon-caret-right </span>
          </li>
          <li>
            <span>
              <i class="el-icon-caret-top"></i> el-icon-caret-top </span>
          </li>
          <li>
            <span>
              <i class="el-icon-check"></i> el-icon-check </span>
          </li>
          <li>
            <span>
              <i class="el-icon-circle-check"></i> el-icon-circle-check </span>
          </li>
          <li>
            <span>
              <i class="el-icon-circle-close"></i> el-icon-circle-close </span>
          </li>
          <li>
            <span>
              <i class="el-icon-circle-cross"></i> el-icon-circle-cross </span>
          </li>
          <li>
            <span>
              <i class="el-icon-close"></i> el-icon-close </span>
          </li>
          <li>
            <span>
              <i class="el-icon-upload"></i> el-icon-upload </span>
          </li>
          <li>
            <span>
              <i class="el-icon-d-arrow-left"></i> el-icon-d-arrow-left </span>
          </li>
          <li>
            <span>
              <i class="el-icon-d-arrow-right"></i> el-icon-d-arrow-right </span>
          </li>
          <li>
            <span>
              <i class="el-icon-d-caret"></i> el-icon-d-caret </span>
          </li>
          <li>
            <span>
              <i class="el-icon-date"></i> el-icon-date </span>
          </li>
          <li>
            <span>
              <i class="el-icon-delete"></i> el-icon-delete </span>
          </li>
          <li>
            <span>
              <i class="el-icon-document"></i> el-icon-document </span>
          </li>
          <li>
            <span>
              <i class="el-icon-edit"></i> el-icon-edit </span>
          </li>
          <li>
            <span>
              <i class="el-icon-information"></i> el-icon-information </span>
          </li>
          <li>
            <span>
              <i class="el-icon-loading"></i> el-icon-loading </span>
          </li>
          <li>
            <span>
              <i class="el-icon-menu"></i> el-icon-menu </span>
          </li>
          <li>
            <span>
              <i class="el-icon-message"></i> el-icon-message </span>
          </li>
          <li>
            <span>
              <i class="el-icon-minus"></i> el-icon-minus </span>
          </li>
          <li>
            <span>
              <i class="el-icon-more"></i> el-icon-more </span>
          </li>
          <li>
            <span>
              <i class="el-icon-picture"></i> el-icon-picture </span>
          </li>
          <li>
            <span>
              <i class="el-icon-plus"></i> el-icon-plus </span>
          </li>
          <li>
            <span>
              <i class="el-icon-search"></i> el-icon-search </span>
          </li>
          <li>
            <span>
              <i class="el-icon-setting"></i> el-icon-setting </span>
          </li>
          <li>
            <span>
              <i class="el-icon-share"></i> el-icon-share </span>
          </li>
          <li>
            <span>
              <i class="el-icon-star-off"></i> el-icon-star-off </span>
          </li>
          <li>
            <span>
              <i class="el-icon-star-on"></i> el-icon-star-on </span>
          </li>
          <li>
            <span>
              <i class="el-icon-time"></i> el-icon-time </span>
          </li>
          <li>
            <span>
              <i class="el-icon-warning"></i> el-icon-warning </span>
          </li>
          <li>
            <span>
              <i class="el-icon-delete2"></i> el-icon-delete2 </span>
          </li>
          <li>
            <span>
              <i class="el-icon-upload2"></i> el-icon-upload2 </span>
          </li>
          <li>
            <span>
              <i class="el-icon-view"></i> el-icon-view </span>
          </li>
        </ul>
      </div>

    </div>

    <div class="card">
      <h1 class="card-title">Smooth Image Zooming</h1>
      <p class="card-text">This demo shows how to implement zoomable images with Vue.js. If you click the below image, a dialog will be opened and the image will be zoomed smoothly.</p>
      <div class="card-image">
        <image-dialog 
        thumb="http://www.jq22.com/tp/a3cfb369-df23-4e54-a158-1dd0435e152f.png" 
        full="http://www.jq22.com/tp/5a8016ac-b60a-42c2-a735-dd238517b593.png"
         :full-width="945" :full-height="600"></image-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import ImageDialog from '@/components/base/ImageScale.vue'
export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    ImageDialog
  },
}
</script>
