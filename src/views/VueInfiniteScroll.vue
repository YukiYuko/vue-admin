<template>
    <div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <ul>
                <li style="height:100px;line-height:100px;" v-for="(item,index) in data" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
let count = 0;
export default {
    data() {
        return {
            data: [],
            busy: false
        }
    },
    components: {

    },
    computed: {

    },
    methods: {
        loadMore: function() {
            this.busy = true;
            setTimeout(() => {
                for (var i = 0, j = 10; i < j; i++) {
                    this.data.push({ name: count++ });
                }
                this.busy = false;
            }, 16);
        }
    }
}
</script>
<style lang="less" scoped>

</style>
