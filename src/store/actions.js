import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      //检查是否添加过该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
      //商品新添加或商品数量+1
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量+1')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('商品添加成功')
      }
    })
  }
}
