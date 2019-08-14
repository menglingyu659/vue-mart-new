import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    cartGoods: []
  },
  getters: {
    total(state) {
      return state.cartGoods.reduce( (num, ele) => {
        return num += JSON.parse(ele.price)
      }, 0 )
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    addCart(state, goods) {
      state.cartGoods.push(goods)
      // console.log(goods)
    }
  },
  actions: {

  }
})
