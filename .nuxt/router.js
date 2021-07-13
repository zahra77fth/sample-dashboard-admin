import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _731a44a8 = () => interopDefault(import('..\\pages\\forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _37bb3cd6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0c064afb = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _3b199b8b = () => interopDefault(import('..\\pages\\todo-pages\\assigned_to_me.vue' /* webpackChunkName: "pages/todo-pages/assigned_to_me" */))
const _69eabb1c = () => interopDefault(import('..\\pages\\todo-pages\\important.vue' /* webpackChunkName: "pages/todo-pages/important" */))
const _6afe45c0 = () => interopDefault(import('..\\pages\\todo-pages\\myday.vue' /* webpackChunkName: "pages/todo-pages/myday" */))
const _c81cedd8 = () => interopDefault(import('..\\pages\\todo-pages\\planned.vue' /* webpackChunkName: "pages/todo-pages/planned" */))
const _340b0844 = () => interopDefault(import('..\\pages\\todo-pages\\tasks.vue' /* webpackChunkName: "pages/todo-pages/tasks" */))
const _6e1399bf = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/forget-password",
    component: _731a44a8,
    name: "forget-password"
  }, {
    path: "/login",
    component: _37bb3cd6,
    name: "login"
  }, {
    path: "/signup",
    component: _0c064afb,
    name: "signup"
  }, {
    path: "/todo-pages/assigned_to_me",
    component: _3b199b8b,
    name: "todo-pages-assigned_to_me"
  }, {
    path: "/todo-pages/important",
    component: _69eabb1c,
    name: "todo-pages-important"
  }, {
    path: "/todo-pages/myday",
    component: _6afe45c0,
    name: "todo-pages-myday"
  }, {
    path: "/todo-pages/planned",
    component: _c81cedd8,
    name: "todo-pages-planned"
  }, {
    path: "/todo-pages/tasks",
    component: _340b0844,
    name: "todo-pages-tasks"
  }, {
    path: "/",
    component: _6e1399bf,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
