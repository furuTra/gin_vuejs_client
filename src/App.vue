<template>
  <Users/>
  <UserAdd/>
</template>

<script>
import Users from './components/Users.vue'
import UserAdd from './components/UserAdd.vue'

export default {
  name: 'App',
  components: {
    Users,
    UserAdd,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
