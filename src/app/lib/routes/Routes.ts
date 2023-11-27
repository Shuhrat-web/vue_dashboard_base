import { createRouter, createWebHistory } from "vue-router";
import Home from '@pages/Home.vue'
import Users from '@pages/users/Users.vue'
import Tarifs from '@pages/tarifs/Tarifs.vue'
import Services from '@pages/services/Services.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/users',
            component: Users,
        },
        {
            path: '/tarifs',
            component: Tarifs,
        },
        {
            path: '/services',
            component: Services,
        },
    ]
})
  