import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router-dom'

import Header from './components/Header'
import Bookmarks from './pages/Bookmarks'
import Cart from './modules/Cart'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import Login from './modules/Login'
import Register from './modules/Register'

const App = () => {
  const { isVisibCart } = useSelector(state => state.cartVisib)

  return (
    <div className="wrapper">
      {isVisibCart && <Cart />}
      <Routes>
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={
          <div className="wrapper__content">
            <Header />
            <Outlet />
          </div>
        }>
          <Route path='' element={<Home />} />
          <Route path='bookmarks' element={<Bookmarks />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
