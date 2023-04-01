import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { CaretLeft } from 'react-bootstrap-icons'

import { Logo } from '../../assets'
import './Auth.scss'

const Auth = () => {
    return (
        <div className='auth'>
            <div className="auth__header">
                <div className="auth__header--logo">
                    <img src={Logo} alt="Logo" />
                    <div className="auth__header--logo-text">
                        <p>sneakers</p>
                        <b>Магазин лучших кросовок</b>
                    </div>
                </div>
                <Link to='/' className='auth__header--back'>
                    <CaretLeft />
                </Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Auth