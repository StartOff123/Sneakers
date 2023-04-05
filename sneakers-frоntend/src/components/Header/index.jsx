import React from 'react'
import { Cart3, Heart, PersonCircle, PlusLg } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { calcTotalPrice } from '../../utils'
import { fetchAllCart } from '../../redux/slices/Cart'
import { setIsVisibCard } from '../../redux/slices/Visib'
import { selectIsAuth } from '../../redux/slices/Auth'
import { Logo } from '../../assets'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const { totalPrice, cartItems } = useSelector(state => state.cart)

    const onVisibCart = () => dispatch(setIsVisibCard(true))

    React.useEffect(() => {
        calcTotalPrice(cartItems)
    }, [cartItems])

    React.useEffect(() => {
        dispatch(fetchAllCart())
    }, [])

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
                        <div className="header__profile--btn">
                            <Link to='/addsneakers'>Добавить товар <PlusLg /></Link>
                        </div>
                        <div onClick={onVisibCart} className="header__profile--cart">
                            {cartItems &&
                                <div className="header__profile--cart-count">
                                    <span>{cartItems.length}</span>
                                </div>
                            }
                            <Cart3 />
                            <p>{totalPrice} ₽</p>
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