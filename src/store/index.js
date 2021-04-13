import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
  state () {
    return {
      users: [],
      users_num: 0,
      msg: ''
    }
  },
  getters: {
    getUsers: (state) => () => {
      return state.users
    },
    getUsersNum: (state) => () => {
        return state.users_num
    },
    getMsg: (state) => () => {
      return state.msg
    }
  },
  mutations: {
    setUsers (state, data) {
      state.users = data.users
      state.msg = data.msg
      state.users_num = data.users_num
    }
  },
  actions: {
    // ユーザー取得
    async getUsers (context, params) {
      const data = {
        users: [],
        users_num: 0,
        msg: '',
      }
      await axios.get('/users', {
          params: params
      })
      .then(response => {
        data.users = response.data.User
        data.users_num = response.data.Count
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
