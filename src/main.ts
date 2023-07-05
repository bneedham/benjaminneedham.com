// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const lightBenTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ddd',
    surface: '#ddd',
    primary: '#bada55',
    'primary-darken-1': '#889520',
    secondary: '#105163',
    'secondary-darken-1': '#002a37',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
const darkBenTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#222',
    surface: '#222',
    primary: '#bada55',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'lightBenTheme',
      themes: {
        lightBenTheme,
        darkBenTheme
      },
    },
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
