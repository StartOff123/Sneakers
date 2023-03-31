import { configureStore } from '@reduxjs/toolkit'

import cartVisib from './slices/visibCart'

const store = configureStore({
    reducer: { cartVisib }
})

export default store