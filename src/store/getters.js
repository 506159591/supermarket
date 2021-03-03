export default {
  //购物车商品数量
  cartLength(state) {
    return state.cartList.length
  },
  //购物车商品
  cartList(state) {
    return state.cartList
  }
}