// eslint-disable-next-line no-unused-vars
import { Buffer } from 'buffer/'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store/store'
import socketService from './websockets/socket.service'
import process from 'process'
import EventEmitter from 'events'
import Vue3TouchEvents from 'vue3-touch-events'

window.Buffer = Buffer
window.process = process
window.EventEmitter = EventEmitter

socketService.init({}, 'wss://madinium.app:8443/')

const pinia = createPinia()

createApp(App).use(pinia).use(store).use(router).use(Vue3TouchEvents).mount('#app')
