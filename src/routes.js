import Vue from "vue";
import VueRouter from 'vue-router'
import TodoView from '@/views/TodoView'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active-link',
    routes: [
        {
            path:'/',
            name: 'Today',
            component: TodoView,
        },
        {
            path:'/tomorrow',
            name: 'Tomorrow',
            component: TodoView,
        }
    ],
    
})
