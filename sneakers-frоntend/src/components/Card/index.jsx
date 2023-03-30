import React from 'react'
import { Heart, Plus } from 'react-bootstrap-icons'

import sneacers from '../../assets/img/sneakers.jpg'
import './Card.scss'

const Card = () => {
    return (
        <div className='card'>
            <div className="card__img">
                <button>
                    <Heart />
                </button>
                <img src={sneacers} alt="Sneakers" />
            </div>
            <div className="card__title">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>
            <div className="card__bottom">
                <div className="card__bottom--price">
                    <b>Цена:</b>
                    <p>12 999 ₽</p>
                </div>
                <button>
                    <Plus />
                </button>
            </div>
        </div>
    )
}

export default Card