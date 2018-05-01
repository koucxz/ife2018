import './main.css'
// route
import DataBind from './pages/DataBind.san'
import IfFor from './pages/IfFor.san'

import {router} from 'san-router'

router.add({rule: '/', Component: IfFor, target: '#app'})
router.add({rule: '/bind', Component: DataBind, target: '#app'})
router.add({rule: '/if', Component: IfFor, target: '#app'})
// start
router.start()