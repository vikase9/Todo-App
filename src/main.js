import Vue from "vue";
import App from "./App.vue";
import '@/scss/style.scss'
import './index.css'
import routes from './router'


new Vue({
  routes,
  render: (h) => h(App),
})
.$mount("#app");
