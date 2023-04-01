import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isVisibCart: false,
}

const visibSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setIsVisibCard: (state, action) => { 
            state.isVisibCart = action.payload 
        },
    }
})

export default visibSlice.reducer
export const { setIsVisibCard } = visibSlice.actions