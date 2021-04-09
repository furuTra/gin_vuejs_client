<template>
  <div id="user_add">
    <input v-model="name" placeholder="名前を入力してください">
    <input v-model="email" placeholder="メールアドレスを入力してください">
    <button @click='addUser'>登録</button>
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    addUser: function() {
      const postParam = {
          name: this.name,
          email: this.email
      }
      this.$store.dispatch('addUser', postParam)
    }
  }
}
</script>