import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'

export default {
  //商品数量+1
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  //新添加商品
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}