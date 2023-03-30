import React from 'react'

import Header from '../../components/Header'
import AllSneacers from '../../modules/AllSneakers'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <AllSneacers />
    </div>
  )
}

export default Home