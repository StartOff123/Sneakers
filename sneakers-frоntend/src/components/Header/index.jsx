import React from 'react'
import { Cart3, Heart, PersonCircle } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setIsVisib } from '../../redux/slices/visibCart'
import logo from '../../assets/img/logo.png'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const onVisibCart = () => dispatch(setIsVisib(true))

    return (
        <div className='header'>
            <Link to='/' className="header__logo">
                <img src={logo} alt="Logo" />
                <div className="header__logo--text">
                    <p>sneakers</p>
                    <b>Магазин лучших кросовок</b>
                </div>
            </Link>
            <div className="header__profile">
                <div onClick={onVisibCart} className="header__profile--cart">
                    <Cart3 />
                    <span>1200 ₽</span>
                </div>
                <div className="header__profile--btn">
                    <Link to='/bookmarks'>
                        <Heart />
                    </Link>
                    <Link to='/profile'>
                        <PersonCircle />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header