<template>
  <div id="users">
    <p>Users Component</p>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <ul v-for="user in users" :key="user">
        <li>名前: {{ user.Name }} email: {{ user.Email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Users',
    data () {
        return {
            users: [],
            loading: true,
            errored: false
        }        
    },
    created: function() {
        this.$axios.get('/users')
        .then(
            response => {
                this.users = response.data 
            }
        )
        .catch(
            e => {
                console.log(e)
                this.errored = true
            }
        )
        .finally(
            () => this.loading = false
        )
    }
}
</script>
