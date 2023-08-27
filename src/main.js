import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store/store'

const pinia = createPinia()

createApp(App).use(pinia).use(store).use(router).mount('#app')
