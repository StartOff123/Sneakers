import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router-dom'

import { Header } from './components'
import { Bookmarks, Home, Auth, Profile, FullCard } from './pages'
import { Cart, Login, Register} from './modules'

const App = () => {
  const { isVisibCart } = useSelector(state => state.visib)

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
          <Route path=':_id' element={<FullCard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
