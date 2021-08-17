import Vue from "vue";
import VueRouter from 'vue-router'

import Upcoming from './views/Upcoming'
import TodayTask from './components/TodayTask'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            component: TodayTask
        },
        {
            path:'/upcoming',
            component: Upcoming
        }
    ]
})
