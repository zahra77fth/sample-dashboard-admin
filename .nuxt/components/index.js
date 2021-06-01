import { wrapFunctional } from './utils'

export { default as AddTask } from '../..\\components\\AddTask.vue'
export { default as BackgroundLines } from '../..\\components\\BackgroundLines.vue'
export { default as ForgetPasswordCard } from '../..\\components\\ForgetPasswordCard.vue'
export { default as LoginCard } from '../..\\components\\LoginCard.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Sider } from '../..\\components\\Sider.vue'
export { default as SignupCard } from '../..\\components\\SignupCard.vue'

export const LazyAddTask = import('../..\\components\\AddTask.vue' /* webpackChunkName: "components/add-task" */).then(c => wrapFunctional(c.default || c))
export const LazyBackgroundLines = import('../..\\components\\BackgroundLines.vue' /* webpackChunkName: "components/background-lines" */).then(c => wrapFunctional(c.default || c))
export const LazyForgetPasswordCard = import('../..\\components\\ForgetPasswordCard.vue' /* webpackChunkName: "components/forget-password-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginCard = import('../..\\components\\LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const LazySider = import('../..\\components\\Sider.vue' /* webpackChunkName: "components/sider" */).then(c => wrapFunctional(c.default || c))
export const LazySignupCard = import('../..\\components\\SignupCard.vue' /* webpackChunkName: "components/signup-card" */).then(c => wrapFunctional(c.default || c))
