import React from 'react'
import { CaretLeft } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import notBookmarks from '../../assets/img/notBookmarks.png'
import Card from '../../components/Card'
import './Bookmarks.scss'

const Bookmarks = () => {
    // const items = [
    //     {
    //         title: 'ADIDAS DEERUPT RUNNER БЕЛО-ЧЕРНЫЕ МУЖСКИЕ-ЖЕНСКИЕ (35-44)',
    //         imgUrl: 'https://streetfoot.ru/wp-content/uploads/2020/07/adidas-deerupt-runner-belo-chernye-40-44.jpg',
    //         price: 5090
    //     },
    // ]

    const items = null

    return (

        <div className='bookmarks'>
            {items ?
                <>
                    <div className="bookmarks__header">
                        <Link to='/' className='bookmarks__header--back'>
                            <CaretLeft />
                        </Link>
                        <h1>Мои закладки</h1>
                    </div>
                    <div className="bookmarks__bookmarksItems">
                        {items.map((item, index) =>
                            <Card key={index} {...item} type='list' isLiked />
                        )}
                    </div>
                </> :
                <div className="bookmarks__notBookmarks">
                    <img src={notBookmarks} alt="notBookmarks" />
                    <h1>Закладок нет :(</h1>
                    <p>Вы ничего не добавляли в закладки</p>
                    <Link to='/'>
                        <Button width={265} type='back' content='Вернуться назад' />
                    </Link>
                </div>
            }
        </div>
    )
}

export default Bookmarks