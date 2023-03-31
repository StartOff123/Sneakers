import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'

import Button from '../../components/Button'
import './Register.scss'

const Register = () => {
    return (
        <div className='register'>
            <h1>Регистрация</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            // onFinish={onFinish}
            >
                <Form.Item layout="inline" name="horizontal_login">
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Пожалуйста заполните это поле!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Придумайте логин" />
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
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Пожалуйста заполните это поле!' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Поддтвердите пароль"
                    />
                </Form.Item>
                <Form.Item>
                    <Button content='Зарегестрироваться' padding={10} borderRadius={10}></Button>
                </Form.Item>
            </Form>
            <Link to='/auth/login'>Авторизоваться</Link>
        </div>
    )
}

export default Register