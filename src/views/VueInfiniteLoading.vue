<template>
    <div>
        <p v-for="(item,index) in list" :key="index" class="basic-list-item">
            Line:
            <span v-text="item"></span>
        </p>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
export default {
    data() {
        return {
            list: [],
        };
    },
    methods: {
        infiniteHandler($state) {
            setTimeout(() => {
                const temp = [];
                for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
                    temp.push(i);
                }
                this.list = this.list.concat(temp);
                $state.loaded();
            }, 1000);
        },
    },
    components: {
        InfiniteLoading,
    },
};
</script>
<style lang="less" scoped>
.basic-list-item {
    margin: 0;
    padding: 0 10px;
    font-size: 14px;
    line-height: 40px;
    color: #666;
    background-color: #fafafa;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #e3e3e3;
}
</style>
