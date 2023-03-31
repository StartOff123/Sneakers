import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'

import Button from '../../components/Button'
import './Login.scss'

const Login = () => {
    return (
        <div className='login'>
            <h1>Авторизация</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            // onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста заполните это поле!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста заполните это поле!' }]}
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