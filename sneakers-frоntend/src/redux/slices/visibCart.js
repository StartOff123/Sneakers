import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isVisibCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsVisib: (state, action) => {
            state.isVisibCart = action.payload
        }
    }
})

export default cartSlice.reducer
export const { setIsVisib } = cartSlice.actions