import React from 'react'
import { Link } from 'react-router-dom'
import { CaretLeft } from 'react-bootstrap-icons'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons'
import { Form, Upload, Input, message, Col, Row, InputNumber } from 'antd'
import { useFormik } from 'formik'

import { Button } from '../../components'
import './AddSneakers.scss'

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
}

const AddSneakers = () => {
    const [loading, setLoading] = React.useState(false)
    const [imageUrl, setImageUrl] = React.useState('')

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false)
                setImageUrl(url)
            })
        }
    }

    const formik = useFormik({
        initialValues: {
            imageUrl,
            title: '',
            description: '',
            price: '',
        },
        validate: values => {
            let errors = {}

            if (values.description === '') {
                errors.description = 'Пожалуйста заполните это поле'
            }
            if (values.price === '') {
                errors.price = 'Пожалуйста заполните это поле'
            }
            if (values.imageUrl === '') {
                errors.imageUrl = 'Пожалуйста заполните это поле'
            }

            return errors
        },
        onSubmit: async values => {
            console.log(imageUrl, values)
        }
    })

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Добвить изображение
            </div>
        </div>
    )

    return (
        <div className='addsneakers'>
            <div className="addsneakers__header">
                <Link to='/' className='addsneakers__header--back'>
                    <CaretLeft />
                </Link>
                <h1>Добавить товар</h1>
            </div>
            <div className="addsneakers__form">
                <Form
                    name="addsneakers"
                    initialValues={{ remember: true }}
                >
                    <Row>
                        <Form.Item
                            name='Image'
                            rules={[{ required: true, message: 'Пожалуйста заполните это поле' }]}
                        >
                            <Upload
                                listType="picture-card"
                                className="addsneakers__form-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Form.Item>
                        <Col style={{ flex: 1 }}>
                            <Form.Item
                                name="Title"
                                style={{ marginBottom: 20 }}
                                help={formik.touched.title && formik.errors.title && formik.errors.title}
                                validateStatus={!formik.touched.title ? '' : formik.errors.title ? 'error' : 'success'}
                                rules={[{ required: true, message: 'Пожалуйста заполните это поле' }]}
                            >
                                <Input.TextArea
                                    id='title'
                                    autoSize
                                    style={{ width: '100%' }}
                                    placeholder="Название"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Form.Item>
                            <Form.Item
                                name="Description"
                                style={{ marginBottom: 20 }}
                                help={formik.touched.description && formik.errors.description && formik.errors.description}
                                validateStatus={!formik.touched.description ? '' : formik.errors.description ? 'error' : 'success'}
                                rules={[{ required: true, message: 'Пожалуйста заполните это поле' }]}
                            >
                                <Input.TextArea
                                    id='description'
                                    autoSize
                                    style={{ width: '100%' }}
                                    placeholder="Осписание товара"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Form.Item>
                            <Form.Item
                                name='Price'
                                help={formik.touched.price && formik.errors.price && formik.errors.price}
                                validateStatus={!formik.touched.price ? '' : formik.errors.price ? 'error' : 'success'}
                                rules={[{ required: true, message: 'Пожалуйста заполните это поле' }]}
                            >
                                <Input
                                    id='price'
                                    prefix='₽'
                                    style={{ width: 200 }}
                                    placeholder='Цена'
                                    formatter={value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    isSubmitting={formik.isSubmitting}
                                    action={formik.handleSubmit}
                                    content='Добавить'
                                    width={200}
                                    padding={10}
                                    borderRadius={10}
                                ></Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default AddSneakers