export default {
    install(Vue) {
        Vue.component('LpShareable', () => import('./src/LpShareable'));
    },
}
