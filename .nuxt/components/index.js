import { wrapFunctional } from './utils'

export { default as ForgetPasswordCard } from '../../components/ForgetPasswordCard.vue'
export { default as LoginCard } from '../../components/LoginCard.vue'
export { default as SignupCard } from '../../components/SignupCard.vue'

export const LazyForgetPasswordCard = import('../../components/ForgetPasswordCard.vue' /* webpackChunkName: "components/forget-password-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLoginCard = import('../../components/LoginCard.vue' /* webpackChunkName: "components/login-card" */).then(c => wrapFunctional(c.default || c))
export const LazySignupCard = import('../../components/SignupCard.vue' /* webpackChunkName: "components/signup-card" */).then(c => wrapFunctional(c.default || c))
