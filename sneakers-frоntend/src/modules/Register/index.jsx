import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, message } from 'antd'
import { useFormik } from 'formik'
import { validateForm } from '../../utils'

import { fetchRegister } from '../../redux/slices/Auth'
import { Button } from '../../components'
import './Register.scss'

const Register = () => {
    const dispath = useDispatch()
    const { registerError } = useSelector(state => state.auth)
    console.log(registerError)

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            login: '',
            password: '',
            confirmation: '',
        },
        validate: values => {
            let errors = {}
            validateForm({ values, errors })

            return errors
        },
        onSubmit: async (values) => {
            const { confirmation, ...data } = values
            await dispath(fetchRegister(data))

            if (registerError) {
                message.error(registerError.error.message)
            } else {
                message.success('Регистрация прошла успешно!')
                return <Navigate to='/auth/login' />
            }
        }
    })

    return (
        <div className='register'>
            <h1>Регистрация</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={formik.handleSubmit}
            >
                <Form name="horizontal_login" layout="inline" style={{ justifyContent: 'space-between', marginBottom: 20 }}>
                    <Form.Item
                        style={{ width: '48%', margin: 0 }}
                        name="Name"
                        validateStatus={!formik.touched.name ? '' : formik.errors.name ? 'error' : 'success'}
                        rules={[{ required: true }]}
                    >
                        <Input
                            id='name'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Имя"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ width: '48%', margin: 0 }}
                        validateStatus={!formik.touched.surname ? '' : formik.errors.surname ? 'error' : 'success'}
                        name="Surname"
                        rules={[{ required: true }]}
                    >
                        <Input
                            id='surname'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Фамилия"
                            value={formik.values.suranem}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>
                </Form>
                <Form.Item
                    name="Login"
                    help={formik.touched.login && formik.errors.login && formik.errors.login}
                    validateStatus={!formik.touched.login ? '' : formik.errors.login ? 'error' : 'success'}
                    rules={[{ required: true }]}
                >
                    <Input
                        id='login'
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Придумайте логин"
                        value={formik.values.login}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    name="Password"
                    help={formik.touched.password && formik.errors.password && formik.errors.password}
                    validateStatus={!formik.touched.password ? '' : formik.errors.password ? 'error' : 'success'}
                    rules={[{ required: true }]}
                >
                    <Input.Password
                        id='password'
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    name="Confirmation"
                    help={formik.touched.confirmation && formik.errors.confirmation && formik.errors.confirmation}
                    validateStatus={!formik.touched.confirmation ? '' : formik.errors.confirmation ? 'error' : 'success'}
                    rules={[{ required: true }]}
                >
                    <Input.Password
                        id='confirmation'
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Поддтвердите пароль"
                        value={formik.values.confirmation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Item>
                <Form.Item>
                    <Button content='Зарегестрироваться' padding={10} borderRadius={10} />
                </Form.Item>
            </Form>
            <Link to='/auth/login'>Авторизоваться</Link>
        </div>
    )
}

export default Register