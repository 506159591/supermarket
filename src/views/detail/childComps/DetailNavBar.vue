<template>
        <nav-bar class="nav-bar">
            <div slot="left">
                <img src="~assets/img/common/back.svg" alt="" class="back" @click="backClick">
            </div>
            <div slot="center" class="title">
                <div v-for="(item, index) in titles" class="title-item" :class="{active: index === currentIndex}" @click="titleClick(index)">
                    {{item}}
                    </div>
            </div>
        </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods: {
        //导航栏点击监听
        titleClick(index) {
            this.currentIndex = index;
            this.$emit('titleClick', index)
            
        },
        //返回上一页
        backClick() {
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    .nav-bar {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    .title {
        display: flex;
        font-size: 13px;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: pink;
    }
    .back {
        margin-top: 11px;
    }
</style>
