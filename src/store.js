import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	list:[],
    nextId:0
  },
  mutations: {
  	addItem (state,value) {
      value.id = state.nextId++;
      state.list.push(value);
  	},
    focusItem(state,id) {
      state.list.forEach(function(item) {
        if(item.id == id) {
          item.focus = true;
        }else {
          item.focus = false;
        }
      })
    }
  },
  actions: {

  }
})
