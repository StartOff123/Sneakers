import React from 'react'
import { Cart3, Heart, PersonCircle } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { setIsVisibCard } from '../../redux/slices/visib'
import { Logo } from '../../assets'
import './Header.scss'

const Header = () => {
    const { isAuth } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const onVisibCart = () => dispatch(setIsVisibCard(true))

    return (
        <div className='header'>
            <Link to='/' className="header__logo">
                <img src={Logo} alt="Logo" />
                <div className="header__logo--text">
                    <p>sneakers</p>
                    <b>Магазин лучших кросовок</b>
                </div>
            </Link>
            <div className="header__profile" style={!isAuth ? { border: 'none', borderRadius: 0 } : {}}>
                {isAuth ?
                    <>
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
                    </> :
                    <div className="header__profile--authBtn">
                        <Link to='/auth/login'>Войти</Link>
                        <Link to='/auth/register'>Зарегестрироваться</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header