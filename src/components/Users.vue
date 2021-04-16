<template>
  <div id="users">
    <p>Users List</p>
    <p>全{{ getUsersNum }}件</p>
    <select v-model="limit" @change="onChange()">
      <option v-for="(option, key) in limit_options" :key="key" :value="option.value">
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
    <nav aria-label="User list navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
        <li class="page-item" v-for="page in getPerPage" :key="page">
          <a class="page-link" @click="onChange(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      limit_options: [
        { text: "5件", value: 5 },
        { text: "10件", value: 10 },
        { text: "30件", value: 30 },
      ],
      sort_options: [
        { text: "昇順", value: "asc" },
        { text: "降順", value: "desc" },
      ],
      limit: this.$route.query.limit ?? 10, // 表示件数
      sort: this.$route.query.sort ?? "asc", // 表示順
      page: this.$route.query.page ?? 1, // ページ
    }
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers()
    },
    getUsersNum() {
      return this.$store.getters.getUsersNum()
    },
    getPerPage() {
      return Math.ceil(this.$store.getters.getUsersNum() / this.limit)
    },
  },
  methods: {
    // pageを元にoffsetを取得
    createOffset(page) {
      return (parseInt(page) - 1) * parseInt(this.limit)
    },
    // paginationのパラメータ変更時に
    onChange(page = this.page) {
      this.page = page
      // Userを取得する
      let apiQuery = {
        limit: this.limit,
        offset: this.createOffset(page),
        sort: this.sort,
      }
      this.fetchUser(apiQuery)

      // Pagination用のURLに遷移
      let query = {
        limit: this.limit,
        sort: this.sort,
        page: page
      }
      this.$router.push({ path: '/', query: query })
    },
    // APIからUserを取得してくる
    fetchUser(query) {
      this.$store.dispatch('getUsers', query)
    },
  },
  created: function() {
      let query = {
        limit: this.limit,
        offset: this.createOffset(this.page),
        sort: this.sort
      }
      this.fetchUser(query)
  }
}
</script>
