<template>
  <div id="users">
    <p>Users List</p>
    <p>全 : {{ getUsersNum }}件</p>
    <select v-model="total" @change="onChange()">
      <option v-for="(option, key) in total_options" :key="key" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <select v-model="sort" @change="onChange()">
      <option v-for="(option, key) in sort_options" :key="key" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <ul v-for="user in getUsers" :key="user">
      <li>{{ user.Name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      from: "",
      total: 10,
      total_options: [
        { text: "5件", value: 5 },
        { text: "10件", value: 10 },
        { text: "30件", value: 30 },
      ],
      sort: "asc",
      sort_options: [
        { text: "降順", value: "desc" },
        { text: "昇順", value: "asc" },
      ],
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers()
    },
    getUsersNum() {
      return this.$store.getters.getUsersNum()
    }
  },
  methods: {
    onChange() {
      this.getUserAPI()
    },
    getUserAPI() {
      let params = {
        limit: this.total,
        offset: 0,
        sort: this.sort
      }
      this.$store.dispatch('getUsers', params)
    }
  },
  created: function() {
    this.getUserAPI()
  }
}
</script>
