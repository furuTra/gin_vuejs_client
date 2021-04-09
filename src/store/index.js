import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state () {
    return {
      users: [],
      msg: ''
    }
  },
  getters: {
    getUsers: (state) => () => {
      return state.users
    },
    getMsg: (state) => () => {
      return state.msg
    }
  },
  mutations: {
    setUsers (state, data) {
      state.users = data.users
      state.msg = data.msg
    }
  },
  actions: {
    // ユーザー取得
    async getUsers (context, params) {
      const data = {
        users: [],
        msg: ''
      }
      await axios.get('/users', {
          params: params
      })
      .then(response => {
        data.users = response.data
      })
      .catch(e => {
        data.msg = e
      })
      .finally(() => {
        context.commit('setUsers', data)
      })
    },
    // ユーザー追加
    async addUser (context, param) {
      await axios.post('/users', param, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
})
