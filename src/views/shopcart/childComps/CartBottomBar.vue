<template>
    <div class="bottom-bar">
        <div class="check-content">
            <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"></check-button>
            <span>全选</span>
        </div>
        <div class="totle-price">
            合计：{{totlePrice}}
        </div>
        <div class="calculate" @click="calcClick">
            结算({{checkLength}})
        </div>
    </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
import { mapGetters } from "vuex";

export default {
    name: 'CartBottomBar',
    components: {
        CheckButton
    },
    computed: {
        //调用getters中的函数获取商品数据
        ...mapGetters(['cartList']),
        totlePrice() {
            //计算商品总价
            return '￥' + this.cartList.filter(item=> item.checked).reduce((preValue, item) => {
                return preValue + item.price * item.count
            }, 0).toFixed(2)
        },
        //选中商品数量
        checkLength() {
            return this.cartList.filter(item=> item.checked).length
        },
        //有没选中的商品时返回false，全被选中时返回true
        isSelectAll() {
            if(this.cartList.length === 0) return false
            return !this.cartList.find(item => !item.checked)
        }
    },
    methods: {
        //点击全选与全不选
        checkClick() {
            if(this.isSelectAll){
                this.cartList.forEach(item => item.checked = false)
            }else{
                this.cartList.forEach(item => item.checked = true)
            }
        },
        calcClick() {
            if(!this.checkLength){
                this.$toast.show('请选择购买的商品')
            }
        }
    },
}
</script>

<style scoped>
    .bottom-bar {
        position: relative;
        display: flex;
        height: 40px;
        line-height: 40px;
    }
    .check-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 60px;
    }
    .check-button {
        width: 20px;
        height: 20px;
        line-height: 20px;
    }
    .totle-price {
        margin-left: 25px;
        flex: 1;
    }
    .calculate {
        background-color: red;
        width: 90px;
        color: #fff;
        text-align: center;
    }
</style>
