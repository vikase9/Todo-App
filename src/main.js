import Vue from "vue";
import App from "./App.vue";
import '@/scss/style.scss'
import './index.css'
import router from './router'


new Vue({
  router,
  render: (h) => h(App),
})
.$mount("#app");
