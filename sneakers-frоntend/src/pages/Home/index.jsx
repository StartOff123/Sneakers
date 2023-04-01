import React from 'react'
import { Input } from 'antd'
import { Search } from 'react-bootstrap-icons'

import Card from '../../components/Card'
import './Home.scss'

const Home = () => {
  const items = [
    {
      title: 'ADIDAS DEERUPT RUNNER БЕЛО-ЧЕРНЫЕ МУЖСКИЕ-ЖЕНСКИЕ (35-44)',
      imgUrl: 'https://streetfoot.ru/wp-content/uploads/2020/07/adidas-deerupt-runner-belo-chernye-40-44.jpg',
      price: 5090
    },
    {
      title: 'Adidas BB1826 легко Boost Yeezy Boost 350 V2 белуга низким вырезом кроссовки',
      imgUrl: 'https://i.ebayimg.com/images/g/9BkAAOSwcLhhWoLX/s-l500.jpg',
      price: 71097
    },
    {
      title: 'Кроссовки Nike Air Force 1 Low SP x Undefeated',
      imgUrl: 'https://with.com.ru/wp-content/uploads/2022/03/%D0%9A%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-Nike-Air-Force-1-Low-Undefeated-%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB11-e1647167157100.jpg',
      price: 22990
    },
  ]

  return (
    <div className='home'>
      <div className="home__header">
        <h1>Все кроссовки</h1>
        <Input
          size="large"
          style={{ width: 250, height: 37 }}
          placeholder="Поиск..."
          prefix={<Search color='#E4E4E4' />}
        />
      </div>
      <div className="home__priceList">
        {items.map((item, index) =>
          <Card key={index} {...item} type='list' />
        )}
      </div>
    </div>
  )
}

export default Home