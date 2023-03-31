import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Bookmarks from './pages/Bookmarks'
import Cart from './modules/Cart'
import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  const { isVisibCart } = useSelector(state => state.cartVisib)

  return (
    <div className="wrapper">
      {isVisibCart && <Cart />}
      <div className="wrapper__content">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
