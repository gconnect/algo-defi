import { useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'antd/dist/antd.css'

import { toggleDrawer } from './redux/toggleDrawer'

import { Modal } from 'antd'

import Home from './pages/Home'
import Pool from './pages/Pool'
import Index from './pages/Index'
import Asset from './pages/Asset'
import NotFound from './pages/NotFound'
import PoolDetail from './pages/PoolDetail'
import CreatePool from './pages/CreatePool'
import CreatePool2 from './pages/CreatePool2'
import WalletsBtn from './components/Wallets'
import AppHeader from './components/layout/Header'
import AppFooter from './components/layout/Footer'
import AppDrawer from './components/layout/Drawer'
import {connectBtnReducer} from './redux/connectWallet'

function App() {
  const { toggle } = useSelector(state => state.toggle)
  const { isConnect } = useSelector(state => state.connectWallet)
  const dispatch = useDispatch()
  const appLinks = [
    { link: '/explore-circles', title: 'Assets' },
    { link: '/enter-bazaar', title: 'Swap' },
    { link: '/engage-circles', title: 'Stake' },
    { link: '/engage-circles', title: 'Pools' }
  ]

  // const [loading, setLoading] = useState()

  return (
    <Router>
      <AppHeader appLinks={appLinks}/>
      <AppDrawer appLinks={appLinks} isToggle={toggle}/>
      <label className="menu-icon" htmlFor="check">
        <input onClick={() => dispatch(toggleDrawer())} type="checkbox" id="check"/>
        <span className="Menu"></span>
        <span className="Menu"></span>
        <span className="Menu"></span>
      </label>
      <Modal visible={isConnect} onCancel={() => dispatch(connectBtnReducer())} footer={null}>
        <WalletsBtn/>
      </Modal>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/configuration' element={<Pool/>}/>
        <Route path='/pool-detail' element={<PoolDetail/>}/>
        <Route path='/assets' element={<Asset/>}/>
        <Route path='/create-pool' element={<CreatePool/>}/>
        <Route path='/create-pool2' element={<CreatePool2/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/pool' element={<Pool/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <AppFooter />
    </Router>

  )
}

export default App
