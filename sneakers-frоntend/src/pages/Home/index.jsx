import React from 'react'

import Header from '../../components/Header'
import AllSneacers from '../../modules/AllSneakers'
import Cart from '../../modules/Cart'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Cart />
      <Header />
      <AllSneacers />
    </div>
  )
}

export default Home