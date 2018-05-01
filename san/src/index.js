// route
import App from './pages/App.san'

import {router} from 'san-router'

router.add({rule: '/', Component: App, target: '#app'})
// start
router.start()