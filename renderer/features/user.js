import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { config } from '../../configs';
const initialState = {
    user: null,
    error: null,
    token: null,
    loading: 'idle',
}

const apiUrl = config.apiUrl()

async function loginUser(data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`${apiUrl}/auth/login`, requestOptions)
        // if (response.status === 403) {
        //     alert('Usuario o contraseña incorrectos')
        // }
        if (response.status === 200 && response.ok) {
            const data = await response.json()
            // localStorage.setItem('token', data.access_token)
            // router.push('/poliza')
            return data
        } else {
            // trow an error so redux-thunk can handle it
            throw new Error(response.status)
        }
        // return data
    } catch (error) {
        return error
    }
}


const login = createAsyncThunk(
    'users/login',
    async ({ email, password }, { getState, requestId }) => {
        const { currentRequestId, loading } = getState().users
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        try {
            const data = await loginUser({ email, password })
            console.log(data);
            return data
        } catch (error) {
            return error
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId = action.meta.requestId
                }
            })
            .addCase(login.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.token = action.payload.access_token
                }
            })
            .addCase(login.rejected, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.error = action.error
                }
            })
    },
})

export {
    usersSlice,
    login,
}