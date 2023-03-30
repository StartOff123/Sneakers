import React from 'react'
import { Input } from 'antd'
import { Search } from 'react-bootstrap-icons'

import Card from '../../components/Card'
import './AllSneakers.scss'

const AllSneacers = () => {
    return (
        <div className='allsneakers'>
            <div className="allsneakers__header">
                <h1>Все кроссовки</h1>
                <Input
                    size="large"
                    style={{ width: 250, height: 37 }}
                    placeholder="Поиск..."
                    prefix={<Search color='#E4E4E4' />}
                />
            </div>
            <div className="allsneakers__priceList">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default AllSneacers