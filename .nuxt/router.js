import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6498c930 = () => interopDefault(import('../pages/forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _51344b5e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _21af0d73 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _f0e6af72 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6498c930,
    name: "forget-password"
  }, {
    path: "/login",
    component: _51344b5e,
    name: "login"
  }, {
    path: "/signup",
    component: _21af0d73,
    name: "signup"
  }, {
    path: "/",
    component: _f0e6af72,
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
