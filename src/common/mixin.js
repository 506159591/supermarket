import {
  debounce
} from "./utils"
import {
  POP,
  NEW,
  SELL
} from "./const";
//监听商品图片加载完成后刷新
export const itemListenMixin = {
  data() {
    return {
      itemImageListen: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 300)
    this.itemImageListen = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImageListen)
  },
}
//返回顶部
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  },
}
//导航栏类型切换监听
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    }
  }
}
