import express from 'express'
import cors from "cors"
import chalk from 'chalk'
import mongoose from 'mongoose'

import { AuthController } from './controllers/index.js'
import { checkAuth } from './utils/index.js'

mongoose
    .connect('mongodb://localhost:27017/Sneakers')
    .then(() => console.log('Подключение к БД:', chalk.green('ОК')))
    .catch(error => console.log('Подключения к БД:', chalk.red('ERR::'), error))

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5555

app.post('/auth/register', AuthController.register)
app.post('/auth/login', AuthController.login)
app.get('/auth/me', checkAuth, AuthController.getMe)

app.listen(PORT, err => {
    if (err) throw console.log('Ошибка при запуске сервера: ', err)
    console.log('Сервер запущен на проту:', chalk.green(PORT))
})