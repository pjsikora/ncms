import Vue from 'vue'
import App from './App'

/* Page components */
import PageForm from './components/page/PageForm'
import PagesTree from './components/page/PageTree'
import PageSingle from './components/page/PageSingle'

/* Content components */
import ContentForm from './components/content/ContentForm'
import ContentSingle from './components/content/ContentSingle'

import Home from './components/Home'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Home },

  { path: '/pages/form', component: PageForm },
  { path: '/pages/tree', component: PagesTree },
  { path: '/pages/single', component: PageSingle },
  { path: '/pages/single/:page_id', component: PageSingle },

  { path: '/content/form', component: ContentForm },
  { path: '/content/single', component: ContentSingle },
  { path: '/content/single/:content_id', component: ContentSingle }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
