import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAllCart = createAsyncThunk('card/fetchAllCart', async () => {
    try {
        const { data } = await axios.get('/user/allCard')
        return data
    } catch (error) {
        throw error.response.data
    }
})

const initialState = {
    cartItems: null,
    status: 'loading',
    error: null,
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {},
    extraReducers: (bilding) => {
        bilding
            .addCase(fetchAllCart.fulfilled, (state, action) => {
                state.cartItems = action.payload.length === 0 ? null : action.payload 
                state.status = 'loaded'
                state.error = null
            })
            .addCase(fetchAllCart.pending, (state) => {
                state.cartItems = null
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchAllCart.rejected, (state, action) => {
                state.cartItems = null
                state.status = 'error'
                state.error = action.error
            })
    }
})

export default cartSlice.reducer