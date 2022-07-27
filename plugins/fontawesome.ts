import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  /**
   * Editor icons
   */
  faBold,
  faItalic,
  faStrikethrough,
} from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  /**
   * Editor icons
   */
  library.add(faBold)
  library.add(faItalic)
  library.add(faStrikethrough)

  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
