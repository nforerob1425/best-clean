// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4048E5',    // Azul principal
          secondary: '#3B52D9',  // Azul secundario
          success: '#05F258',    // Verde principal
          accent: '#30F284',     // Verde claro
          background: '#f7f7f7ff', // Fondo
        }
      }
    }
  }
})
