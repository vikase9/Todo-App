import Router from 'vue-router'

import Home from './components/Home.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

export default routes