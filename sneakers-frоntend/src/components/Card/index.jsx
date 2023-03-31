import React from 'react'
import { Heart, Plus, HeartFill, Check, X } from 'react-bootstrap-icons'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './Card.scss'

const Card = ({ title, imgUrl, price, type, isLiked }) => {
    const [liked, setLiked] = React.useState(false)
    const [added, setAdded] = React.useState(false)

    return (
        <div style={type === 'list' ? {
            width: 220,
            padding: 30,
            borderRadius: 40
        } : {
            width: '100%',
            padding: 20,
            borderRadius: 20,
            marginBottom: 20
        }} className={classnames('card', {
            'card-list': type === 'list',
            'card-cart': type === 'cart'
        })}>
            <div className="card__img">
                {type === 'list' &&
                    <div onClick={() => setLiked(!liked)} className={classnames('card__img--likeBtn', {
                        'card__img--likeBtn-liked': liked
                    })}>
                        {(liked || isLiked) ? <HeartFill color='#FF8585' /> : <Heart />}
                    </div>
                }
                <img src={imgUrl} alt="Sneakers" />
            </div>
            <div className="card__title">
                <p>{title}</p>
                {type === 'cart' && <b>{price} ₽</b>}
            </div>
            {type === 'list' ?
                <div className="card__bottom">
                    <div className="card__bottom--price">
                        <b>Цена:</b>
                        <p>{price} ₽</p>
                    </div>
                    <div onClick={() => setAdded(!added)} className={classnames('card__bottom--addBtn', {
                        'card__bottom--addBtn-added': added
                    })}>
                        {added ? <Check color='#fff' /> : <Plus />}
                    </div>
                </div> : 
                <div onClick={() => setAdded(!added)} className='card__bottom--remove'>
                    <X />
                </div>
            }
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    isLiked: PropTypes.bool
}

export default Card