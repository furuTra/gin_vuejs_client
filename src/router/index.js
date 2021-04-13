import { createRouter, createWebHistory } from 'vue-router'
import Users from '../components/Users.vue'
import UserAdd from '../components/UserAdd.vue'

const routes = [
    {
        path: '/',
        name: 'Users',
        component: Users
    },
    {
        path: '/add',
        name: 'UserAdd',
        component: UserAdd
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router