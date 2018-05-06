import './main.css'
// route
import DataBind from './pages/DataBind.san'
import IfFor from './pages/IfFor.san'
import styleCtr from './pages/styleCtr.san'

import {router} from 'san-router'

router.add({rule: '/', Component: styleCtr, target: '#app'})
router.add({rule: '/bind', Component: DataBind, target: '#app'})
router.add({rule: '/if', Component: IfFor, target: '#app'})
router.add({rule: '/style', Component: styleCtr, target: '#app'})
// start
router.start()