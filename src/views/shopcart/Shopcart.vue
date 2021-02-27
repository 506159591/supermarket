<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar"
      ><div slot="center">购物车({{ cartLength }})</div></nav-bar
    >
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    //调用getters中的函数获取商品数量
    ...mapGetters(["cartLength"]),
  },
  activated() {
      this.$refs.scroll.refresh()
  },
};
</script>

<style scoped>
.shop-cart {
  height: 100vh;
  position: relative;
}
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
.content {
  height: calc(100% - 133px);
  background-color: #fff;
  overflow: hidden;
}
</style>
