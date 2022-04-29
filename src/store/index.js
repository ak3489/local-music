/*
 * @LastEditors: gcz
 */
import Vue from 'vue'
import Vuex from 'vuex'

import music from './music'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    music
  },
  getters
})