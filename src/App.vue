<template>
    <div id="app" class="layout">
        <transition name="move" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {
        
    },
    computed: {

    },
    methods: {

    },
    beforeMount() {
        console.log('I am parents beforeMount');
    },
    mounted() {
        console.log('I am parents mounted');
    },
    beforeCreate() {
        console.log('I am parents beforeCreated');
    },
    created() {
        console.log('I am parents created');
    }
}
</script>
<style lang="less">
@import './styles/public.less';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.move-enter-active,
.move-leave-active {
    transition: all .5s ease-in-out;
}

.move-enter,
.move-leave {
    opacity: 0;
    transform: translateX(20px);
}
</style>
