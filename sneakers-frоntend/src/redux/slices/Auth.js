import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    try {
        const { data } = await axios.post('/auth/login', params)
        return data
    } catch (error) {
        throw error.response.data
    }
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/auth/me')
    return data
})

const initialState = {
    userData: null,
    status: 'loading',
    error: null
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout: state => {
            state.data = null
        }
    },
    extraReducers: (bilding) => {
        bilding
            .addCase(fetchAuth.pending, (state) => {
                state.userData = null
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.userData = action.payload
                state.status = 'loaded'
                state.error = null
            })
            .addCase(fetchAuth.rejected, (state, action) => {
                state.userData = null
                state.status = 'error'
                state.error = action.error
            })
            .addCase(fetchAuthMe.pending, (state) => {
                state.userData = null
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.userData = action.payload
                state.status = 'loaded'
                state.error = null
            })
            .addCase(fetchAuthMe.rejected, (state, action) => {
                state.userData = null
                state.status = 'error'
                state.error = action.error
            })
    }
})

export const selectIsAuth = state => Boolean(state.auth.userData)
export const { logout } = authSlice.actions
export default authSlice.reducer