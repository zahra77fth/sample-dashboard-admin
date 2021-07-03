import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BackgroundLines: () => import('../../components/BackgroundLines.vue' /* webpackChunkName: "components/background-lines" */).then(c => wrapFunctional(c.default || c)),
  ForgetPasswordCard: () => import('../../components/ForgetPasswordCard.vue' /* webpackChunkName: "components/forget-password-card" */).then(c => wrapFunctional(c.default || c)),
  LoginCard: () => import('../../components/LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Profile: () => import('../../components/Profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c)),
  Sider: () => import('../../components/Sider.vue' /* webpackChunkName: "components/sider" */).then(c => wrapFunctional(c.default || c)),
  SignupCard: () => import('../../components/SignupCard.vue' /* webpackChunkName: "components/signup-card" */).then(c => wrapFunctional(c.default || c)),
  Todo: () => import('../../components/Todo.vue' /* webpackChunkName: "components/todo" */).then(c => wrapFunctional(c.default || c)),
  TodoInfo: () => import('../../components/TodoInfo.vue' /* webpackChunkName: "components/todo-info" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
