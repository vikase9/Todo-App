import Vue from "vue";
import VueRouter from 'vue-router'
import ToDoView from '@/views/ToDoView';


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'today',
            component: ToDoView,

        },
        {
            path:'/upcoming',
            name:'tomorrow',
            component: ToDoView,

        }
    ]
})
