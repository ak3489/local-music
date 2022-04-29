/*
 * @LastEditors: gcz
 */
const music = {
    state: {
        // goods: [
        //     { id: 1, name: 'Java', price: 10, num: 2 },
        //     { id: 2, name: 'Vue', price: 13, num: 21 },
        //     { id: 3, name: 'React', price: 15, num: 25 }
        // ],
        vuexSearchType: 0,
        vuexSearchNo: 1,
    },
    mutations: {
        changeSearchType(state, t) {
            state.vuexSearchType = t
        },
        changeSearchNo(state, n) {
            state.vuexSearchNo = n
        },
        // addGoods(state, g) {
        //     state.goods.push(g)
        // },
        // delGoods(state, idx) {
        //     state.goods.splice(idx, 1)
        // }
    },
    actions: {
        // add({ commit }, g) {
        //     commit('addGoods', g)
        // },
        // del({ commit }, idx) {
        //     commit('delGoods', idx)
        // }
    }
}

export default music