<template>
    <div id="login">
        <div id="particles"></div>
    </div>
</template>

<script>
import particles from 'particles.js'
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
    mounted() {
        particlesJS.load('particles','/static/constant/data.json');
    }
}
</script>
<style lang="less" scoped>
#particles {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #f99;
}
</style>
