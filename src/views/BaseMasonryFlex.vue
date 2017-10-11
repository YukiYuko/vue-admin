<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Mono');

.set-counter-bg-color (@color) when (lightness(@color)>=50%) {
    background-color: darken(@color, 60%);
}

.set-counter-bg-color (@color) when (lightness(@color) < 50%) {
    background-color: lighten(@color, 50%);
}



@bg: #0D0630;
@itemBg1: #18314F;
@itemBg2: #8BBEB2;
@itemBg3: #E6F9AF;
@itemBg4: #384E77;

.setColorAndHover(@baseColor) {
    color: @baseColor;
    &:hover {
        background: lighten(@baseColor, 8%);
    }
}


.masonry {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 500px) {
        flex-direction: row;
    }
}

.column {
    display: flex;
    flex-flow: column wrap;
    width: 100%;

    @media only screen and (min-width: 500px) {
        width: calc(100%/5);
    }
}

.item {
    box-sizing: border-box;
    padding: 10px;
    counter-increment: item-counter;

    &__content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
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
            .set-counter-bg-color(@itemBg1);
            content: counter(item-counter);
        }

        &:after {
            color: darken(@bg, 10%);
            content: 'ಠ‿ಠ';
        }

        &--small {
            .setColorAndHover(@itemBg2);
            height: 100px;

            &:before {
                .set-counter-bg-color(@itemBg2);
            }

            &:after {
                content: '♥◡♥';
            }
        }

        &--medium {
            .setColorAndHover(@itemBg3);
            height: 175px;

            &:before {
                .set-counter-bg-color(@itemBg3);
            }

            &:after {
                content: '◔ᴗ◔';
            }
        }

        &--large {
            .setColorAndHover(@itemBg4);
            height: 280px;

            &:before {
                .set-counter-bg-color(@itemBg4);
            }

            &:after {
                content: 'ಠ_๏';
            }
        }
    }
}
</style>
<template>
    <div>
        <div class="masonry">
            <div class="column">
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
            </div>
            <div class="column">
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
            </div>
            <div class="column">
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
            </div>
            <div class="column">
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
            </div>
            <div class="column">
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
    </div>
</template>

<script>
import vHead from '@/components/common/Header.vue';
import vSidebar from '@/components/common/Sidebar.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        vHead, vSidebar
    },
    computed: {

    },
    methods: {

    }
}
</script>
