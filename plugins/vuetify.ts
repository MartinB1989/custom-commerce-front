import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#fff159',
          }
        }
      },
    }
  })
  app.vueApp.use(vuetify)
})