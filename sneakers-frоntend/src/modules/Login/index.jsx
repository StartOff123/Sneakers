import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAuth, selectIsAuth } from '../../redux/slices/Auth'
import { Button } from '../../components'
import './Login.scss'

const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    if (isAuth) {
        return <Navigate to='/' />
    }

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))
        if ('token' in data.payload) {
            localStorage.setItem('token', data.payload.token)

        } else {
            alert('Не удалось авторизоваться')
        }
    }

    return (
        <div className='login'>
            <h1>Авторизация</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onSubmit}
            >
                <Form.Item
                    name="login"
                    rules={[{ required: true, message: 'Пожалуйста заполните это поле' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста заполните это поле' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Button content='Войти' padding={10} borderRadius={10}></Button>
                </Form.Item>
            </Form>
            <Link to='/auth/register'>Зарегестрироваться</Link>
        </div>
    )
}

export default Login