import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router-dom'

import { Header } from './components'
import { fetchAuthMe } from './redux/slices/Auth'
import { Bookmarks, Home, Auth, Profile, FullCard } from './pages'
import { Cart, Login, Register} from './modules'

const App = () => {
  const dispatch = useDispatch()
  const { isVisibCart } = useSelector(state => state.visib)

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(fetchAuthMe())
      return
    }
  }, [])

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
