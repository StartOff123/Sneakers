import React from 'react'
import { Cart3, Heart, PersonCircle } from 'react-bootstrap-icons'

import logo from '../../assets/img/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="header__logo">
            <img src={logo} alt="Logo" />
            <div className="header__logo--text">
                <p>sneakers</p>
                <b>Магазин лучших кросовок</b>
            </div>
        </div>
        <div className="header__profile">
            <div className="header__profile--cart">
                <Cart3 />
                <span>1200 ₽</span>
            </div>
            <div className="header__profile--btn">
                <Heart />
                <PersonCircle />
            </div>
        </div>
    </div>
  )
}

export default Header