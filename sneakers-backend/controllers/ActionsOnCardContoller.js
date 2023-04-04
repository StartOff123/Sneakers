import chalk from "chalk"

import { UserModel } from "../models/index.js"

export const add = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId).exec()

        user.cart.push(req.body.cardId)
        await user.save()
        res.json(user)
        console.log(`${chalk.green('POST')} ${chalk.underline.italic.gray('/user/addCard')} success: ${chalk.green('true')}`)
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось добаить товар в казину'
        })
        console.log(`${chalk.green('POST')} ${chalk.underline.italic.gray('/user/addCard')} success: ${chalk.red('false')}`)
    }
}

export const remove = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId).exec()

        const index = user.cart.indexOf(req.body.cardId)
        user.cart.splice(index, 1)
        await user.save()
        res.json(user)
        console.log(`${chalk.green('POST')} ${chalk.underline.italic.gray('/user/remvoeCard')} success: ${chalk.green('true')}`)
    } catch (error) {
        res.status(500).json({
            message: 'Не удалось удалить товар в казину'
        })
        console.log(`${chalk.green('POST')} ${chalk.underline.italic.gray('/user/remvoeCard')} success: ${chalk.red('false')}`)
    }
}