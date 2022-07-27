import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  /**
   * Editor icons
   */
  faBold,
  faHeading,
  faItalic,
  faList,
  faStrikethrough,
} from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp) => {
  /**
   * Editor icons
   */
  library.add(faBold)
  library.add(faHeading)
  library.add(faItalic)
  library.add(faList)
  library.add(faStrikethrough)

  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
