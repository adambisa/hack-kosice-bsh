/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

addEventListener('deviceorientation', (e) => {
    const value = document.querySelector('.phone-gyro-card').getAttribute('activity') == "true" ? 1 : 0;
    document.querySelector('.gyrationperc').innerHTML = Math.round(e.beta * 100) / 100 * value;
});