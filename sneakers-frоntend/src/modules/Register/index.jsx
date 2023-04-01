import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { withFormik } from 'formik'
import { validateForm } from '../../utils'

import { Button } from '../../components'
import './Register.scss'

const Register = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props

    return (
        <div className='register'>
            <h1>Регистрация</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
            >
                <Form name="horizontal_login" layout="inline" style={{ justifyContent: 'space-between', marginBottom: 20 }}>
                    <Form.Item
                        style={{ width: '48%', margin: 0 }}
                        name="Name"
                        validateStatus={!touched.name ? '' : errors.name ? 'error' : 'success'}
                        rules={[{ required: true }]}
                    >
                        <Input
                            id='name'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Имя"
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        style={{ width: '48%', margin: 0 }}
                        validateStatus={!touched.surname ? '' : errors.surname ? 'error' : 'success'}
                        name="Surname"
                        rules={[{ required: true }]}
                    >
                        <Input
                            id='surname'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Фамилия"
                            value={values.suranem}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                </Form>
                <Form.Item
                    name="Login"
                    help={touched.login && errors.login && errors.login}
                    validateStatus={!touched.login ? '' : errors.login ? 'error' : 'success'}
                    rules={[{ required: true }]}
                >
                    <Input
                        id='login'
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Придумайте логин"
                        value={values.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    name="Password"
                    help={touched.password && errors.password && errors.password}
                    validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
                    rules={[{ required: true }]}
                >
                    <Input.Password
                        id='password'
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Пароль"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    name="Confirmation"
                    help={touched.confirmation && errors.confirmation && errors.confirmation}
                    validateStatus={!touched.confirmation ? '' : errors.confirmation ? 'error' : 'success'}
                    rules={[{ required: true }]}
                >
                    <Input.Password
                        id='confirmation'
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Поддтвердите пароль"
                        value={values.confirmation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item>
                    <Button action={handleSubmit} content='Зарегестрироваться' padding={10} borderRadius={10} />
                </Form.Item>
            </Form>
            <Link to='/auth/login'>Авторизоваться</Link>
        </div>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        surname: '',
        login: '',
        password: '',
        confirmation: '',
    }),
    validate: values => {
        let errors = {}
        validateForm({ values, errors })

        return errors
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 1000)
    },
    displayName: "RegisterForm"
})(Register)