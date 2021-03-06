import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: "/",
  name: "index",
  component: () => import('../views/Index')
}, {
  path: "/diff1",
  name: "diff1",
  component: () => import('../views/Diff1')
}, {
  path: "/diff2",
  name: "diff2",
  component: () => import('../views/Diff2')
}, {
  path: "/diff3",
  name: "diff3",
  component: () => import('../views/Diff3')
}, {
  path: "/Diff2Html",
  name: "Diff2Html",
  component: () => import('../views/Diff2Html')
}, {
  path: "/htmldiff",
  name: "Htmldiff",
  component: () => import('../views/HtmlDiffer')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router