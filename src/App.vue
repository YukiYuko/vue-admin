<template>
    <div id="app" class="layout">
        <!-- <v-head></v-head> -->
        <v-sidebar></v-sidebar>
        <div class="layout-content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
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

.layout-content {
    position: absolute;
    left: 250px;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 20px;
    overflow-y: scroll;
    background-color: #F8F9FB;
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
