import { wrapFunctional } from './utils'

export { default as ForgetPasswordCard } from '../..\\components\\ForgetPasswordCard.vue'
export { default as LoginCard } from '../..\\components\\LoginCard.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Profile } from '../..\\components\\Profile.vue'
export { default as Sider } from '../..\\components\\Sider.vue'
export { default as SignupCard } from '../..\\components\\SignupCard.vue'
export { default as Todo } from '../..\\components\\Todo.vue'
export { default as TodoInfo } from '../..\\components\\TodoInfo.vue'

export const LazyForgetPasswordCard = import('../..\\components\\ForgetPasswordCard.vue' /* webpackChunkName: "components/forget-password-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginCard = import('../..\\components\\LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyProfile = import('../..\\components\\Profile.vue' /* webpackChunkName: "components/profile" */).then(c => wrapFunctional(c.default || c))
export const LazySider = import('../..\\components\\Sider.vue' /* webpackChunkName: "components/sider" */).then(c => wrapFunctional(c.default || c))
export const LazySignupCard = import('../..\\components\\SignupCard.vue' /* webpackChunkName: "components/signup-card" */).then(c => wrapFunctional(c.default || c))
export const LazyTodo = import('../..\\components\\Todo.vue' /* webpackChunkName: "components/todo" */).then(c => wrapFunctional(c.default || c))
export const LazyTodoInfo = import('../..\\components\\TodoInfo.vue' /* webpackChunkName: "components/todo-info" */).then(c => wrapFunctional(c.default || c))
