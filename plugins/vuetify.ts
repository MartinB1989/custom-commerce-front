import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.deepOrange.accent2,
            secondary: colors.deepPurple.base,
            optional_red: colors.red.base,
            white: '#ffffff'
          }
        }
      },
    }
  })
  app.vueApp.use(vuetify)
})