import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {}
})

export default authSlice.reducer