import React from 'react'
import { Heart, Plus, HeartFill, Check, X } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import axios from '../../axios'
import './Card.scss'

const Card = ({ _id, title, imgUrl, price, type, isLiked }) => {
    const [liked, setLiked] = React.useState(false)
    const [added, setAdded] = React.useState(false)

    const onAdded = async id => {
        setAdded(!added)
        await axios.post('/user/addCard', { cardId: id })
    }

    const onRemove = async id => {
        await axios.post('/user/removeCard', { cardId: id })
    }

    return (
        <div
            style={type === 'list' ? {
                width: 220,
                padding: 30,
                borderRadius: 40
            } : {
                width: '100%',
                padding: '10px 20px',
                borderRadius: 20,
                marginBottom: 20
            }}
            className={classnames('card', {
                'card-list': type === 'list',
                'card-cart': type === 'cart'
            })}
        >
            <div className="card__img">
                {type === 'list' &&
                    <div onClick={() => setLiked(!liked)} className={classnames('card__img--likeBtn', {
                        'card__img--likeBtn-liked': liked
                    })}>
                        {(liked || isLiked) ? <HeartFill color='#FF8585' /> : <Heart />}
                    </div>
                }
                <img src={'http://localhost:5555' + imgUrl} alt="Sneakers" />
            </div>
            <div className="card__title">
                <Link to={"/" + _id}>{title}</Link>
                {type === 'cart' && <b>{price} ₽</b>}
            </div>
            {type === 'list' ?
                <div className="card__bottom">
                    <div className="card__bottom--price">
                        <b>Цена:</b>
                        <p>{price} ₽</p>
                    </div>
                    <div onClick={() => onAdded(_id)} className={classnames('card__bottom--addBtn', {
                        'card__bottom--addBtn-added': added
                    })}>
                        {added ? <Check color='#fff' /> : <Plus />}
                    </div>
                </div> :
                <div onClick={() => onRemove(_id)} className='card__bottom--remove'>
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