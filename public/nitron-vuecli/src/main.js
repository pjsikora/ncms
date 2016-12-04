import Vue from 'vue'
import App from './App'

/* Page components */
import {PageForm, PagesTree, PageSingle} from './components/page'

/* Content components */
import ContentForm from './components/content/ContentForm'
import ContentSingle from './components/content/ContentSingle'

import Config from './components/config/ConfigForm'

import Home from './components/Home'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', component: Home},

  // Page routes
  {path: '/pages/form', component: PageForm},
  {path: '/pages/tree', component: PagesTree},
  {path: '/pages/single', component: PageSingle},
  {path: '/pages/single/:page_id', component: PageSingle},

  // Content routes
  {path: '/content/form', component: ContentForm},
  {path: '/content/single', component: ContentSingle},
  {path: '/content/single/:content_id', component: ContentSingle},

  {path: '/config', component: Config}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
