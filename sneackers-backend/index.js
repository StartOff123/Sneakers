import express from 'express'
import cors from "cors"
import chalk from 'chalk'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5555

app.listen(PORT, err => {
    if (err) throw console.log('Ошибка при запуске сервера: ', err)
    console.log('Сервер запущен на проту:', chalk.green(PORT))
})