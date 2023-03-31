import { configureStore } from '@reduxjs/toolkit'

import cartVisib from './slices/visibCart'
import auth from './slices/Auth'

const store = configureStore({
    reducer: { cartVisib, auth }
})

export default store