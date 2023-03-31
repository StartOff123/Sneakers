import React from 'react'
import { Outlet } from 'react-router-dom'

import logo from '../../assets/img/logo.png'
import './Auth.scss'

const Auth = () => {
    return (
        <div className='auth'>
            <div className="auth__header">
                <img src={logo} alt="Logo" />
                <div className="auth__header--text">
                    <p>sneakers</p>
                    <b>Магазин лучших кросовок</b>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Auth