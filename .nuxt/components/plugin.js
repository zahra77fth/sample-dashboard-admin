import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BackgroundLines: () => import('../../components/BackgroundLines.vue' /* webpackChunkName: "components/background-lines" */).then(c => wrapFunctional(c.default || c)),
  CompletedTodos: () => import('../../components/CompletedTodos.vue' /* webpackChunkName: "components/completed-todos" */).then(c => wrapFunctional(c.default || c)),
  CurrentTodo: () => import('../../components/CurrentTodo.vue' /* webpackChunkName: "components/current-todo" */).then(c => wrapFunctional(c.default || c)),
  ForgetPasswordCard: () => import('../../components/ForgetPasswordCard.vue' /* webpackChunkName: "components/forget-password-card" */).then(c => wrapFunctional(c.default || c)),
  GetTodos: () => import('../../components/GetTodos.vue' /* webpackChunkName: "components/get-todos" */).then(c => wrapFunctional(c.default || c)),
  LoginCard: () => import('../../components/LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Sider: () => import('../../components/Sider.vue' /* webpackChunkName: "components/sider" */).then(c => wrapFunctional(c.default || c)),
  SignupCard: () => import('../../components/SignupCard.vue' /* webpackChunkName: "components/signup-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
