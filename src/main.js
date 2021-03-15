import { createApp } from 'vue'
import App from './App.vue'
import Header from './Header.vue';
import './theme.css'

const app = createApp(App)

// global
app.component('the-header', Header);

app.mount('#app')
