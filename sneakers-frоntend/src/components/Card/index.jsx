import React from 'react'
import { Heart, Plus, HeartFill, Check } from 'react-bootstrap-icons'
import classnames from 'classnames'

import sneacers from '../../assets/img/sneakers.jpg'
import './Card.scss'

const Card = () => {
    const [liked, setLiked] = React.useState(false)
    const [added, setAdded] = React.useState(false)

    return (
        <div className='card'>
            <div className="card__img">
                <div onClick={() => setLiked(!liked)} className={classnames('card__img--likeBtn', {
                    'card__img--likeBtn-liked': liked
                })}>
                    {liked ? <HeartFill color='#FF8585'/> : <Heart />}
                </div>
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
                <div onClick={() => setAdded(!added)} className={classnames('card__bottom--addBtn', {
                    'card__bottom--addBtn-added': added
                })}>
                    {added ? <Check  color='#fff'/> : <Plus />}
                </div>
            </div>
        </div>
    )
}

export default Card