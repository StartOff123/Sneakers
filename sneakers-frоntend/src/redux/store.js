import { configureStore } from '@reduxjs/toolkit'

import visib from './slices/Visib'
import auth from './slices/Auth'
import card from './slices/Card'
import cart from './slices/Cart'
import actionsOnCard from './slices/ActionsOnCard'

const store = configureStore({
    reducer: { visib, auth, card, cart, actionsOnCard }
})

export default store