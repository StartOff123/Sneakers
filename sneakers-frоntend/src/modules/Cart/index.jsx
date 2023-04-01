import React from 'react'
import { useDispatch } from 'react-redux'

import { Box } from '../../assets'
import { Card } from '../../components'
import { setIsVisibCard } from '../../redux/slices/visib'
import { Button } from '../../components'
import './Cart.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const onCloseCart = () => dispatch(setIsVisibCard(false))

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
    }
  ]

  return (
    <div className='cart'>
      <div onClick={onCloseCart} className="cart__bg"></div>
      <div className="cart__block">
        <div className="cart__block--top">
          <div className="cart__block--top--title">
            <h1>Корзина</h1>
          </div>
          {items ?
            <div className="cart__block--top--items">
              {items && items.map((item, index) => <Card key={index} {...item} type='cart' />)}
            </div> :
            <div className="cart__block--top--empty">
              <div className="cart__block--top--empty-block">
                <img src={Box} alt="Box" />
                <h1>Корзина пустая</h1>
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <Button type='back' content='Вернуться назад' action={onCloseCart} />
              </div>
            </div>
          }
        </div>
        {items &&
          <div className="cart__block--bottom">
            <div className="cart__block--bottom--price">
              <p>Итого:</p>
              <span></span>
              <b>21 435 ₽</b>
            </div>
            <div className="cart__block--bottom--btn">
              <Button type='next' content='Оформить заказ' />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart