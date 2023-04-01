import { configureStore } from '@reduxjs/toolkit'

import visib from './slices/visib'
import auth from './slices/Auth'

const store = configureStore({
    reducer: { visib, auth }
})

export default store