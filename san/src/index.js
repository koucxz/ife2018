import './main.css'
// route
import DataBind from './pages/DataBind.san'
import IfFor from './pages/IfFor.san'
import StyleCtr from './pages/StyleCtr.san'
import EventEmit from './pages/EventEmit.san'
import CompInput from './pages/CompInput.san'
import CardSlot from './pages/CardSlot.san'
import TransDirect from './pages/TransDirect.san'
import PageCas from './pages/PageCas.san'

import {router} from 'san-router'

router.add({rule: '/', Component: PageCas, target: '#app'})
router.add({rule: '/bind', Component: DataBind, target: '#app'})
router.add({rule: '/if', Component: IfFor, target: '#app'})
router.add({rule: '/style', Component: StyleCtr, target: '#app'})
router.add({rule: '/event', Component: EventEmit, target: '#app'})
router.add({rule: '/input', Component: CompInput, target: '#app'})
router.add({rule: '/card', Component: CardSlot, target: '#app'})
router.add({rule: '/trans', Component: TransDirect, target: '#app'})
router.add({rule: '/cas', Component: PageCas, target: '#app'})
// start
router.start()