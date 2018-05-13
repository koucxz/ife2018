import './main.css'
// route
import DataBind from './pages/DataBind.san'
import IfFor from './pages/IfFor.san'
import StyleCtr from './pages/StyleCtr.san'
import EventEmit from './pages/EventEmit.san'
import CompInput from './pages/CompInput.san'

import {router} from 'san-router'

router.add({rule: '/', Component: CompInput, target: '#app'})
router.add({rule: '/bind', Component: DataBind, target: '#app'})
router.add({rule: '/if', Component: IfFor, target: '#app'})
router.add({rule: '/style', Component: StyleCtr, target: '#app'})
router.add({rule: '/event', Component: EventEmit, target: '#app'})
router.add({rule: '/input', Component: CompInput, target: '#app'})
// start
router.start()