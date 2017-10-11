<style lang="less" scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Mono");

// less @变量  scss 用 $符号表示
@bg: #4f000b;
@itemBg1: #720026;
@itemBg2: #ce4257;
@itemBg3: #ffc093;
@itemBg4: #ff7f51;
@counterBg: #222;

// less 函数  等于 scss @mixin setColorAndHover(){}
.setColorAndHover(@baseColor) {
  color: @baseColor;
  &:hover {
    background: lighten(@baseColor, 8%);
  }
}

.masonry { column-count: 1; column-gap:20px; counter-reset: item-counter;
  @media screen and (min-width: 400px) {
    column-count: 2;
  }

  @media screen and (min-width: 600px) {
    column-count: 3;
  }

  @media screen and (min-width: 800px) {
    column-count: 4;
  }

  @media screen and (min-width: 1100px) {
    column-count: 5;
  }
}

.item {
  box-sizing: border-box;
  break-inside: avoid;
  margin-bottom: 20px;
  counter-increment: item-counter;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 220px;
    font-size: 40px;
    color: darken(@bg, 5%);
    background: currentColor;
    box-sizing: border-box;
    .setColorAndHover(@itemBg1);

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 13px;
      width: 2em;
      height: 2em;
      line-height: 2em;
      text-align: center;
      font-weight: bold;
      background-color: @counterBg;
      content: counter(item-counter);
    }

    &:after {
      color: darken(@bg, 10%);
      content: "ಠ‿ಠ";
    }

    &--small {
      .setColorAndHover(@itemBg2);
      height: 100px;

      &:after {
        content: "♥◡♥";
      }
    }

    &--medium {
      .setColorAndHover(@itemBg3);
      height: 175px;

      &:after {
        content: "◔ᴗ◔";
      }
    }

    &--large {
      .setColorAndHover(@itemBg4);
      height: 280px;

      &:after {
        content: "ಠ_๏";
      }
    }
  }
}

</style>
<template>
  <div>
       <div class="masonry">
            <div class="item">
                <div class="item__content">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--small">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--medium">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--small">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--medium">
                </div>
            </div>
            <div class="item">
                <div class="item__content">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--large">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--medium">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--small">
                </div>
            </div>
            <div class="item">
                <div class="item__content">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--large">
                </div>
            </div>
            <div class="item">
                <div class="item__content">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--small">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--large">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--medium">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--small">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--medium">
                </div>
            </div>
            <div class="item">
                <div class="item__content">
                </div>
            </div>
            <div class="item">
                <div class="item__content item__content--small">
                </div>
            </div>
        </div>
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
