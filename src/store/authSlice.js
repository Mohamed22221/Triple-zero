import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
// import axios from '../api/axios';
const LOGIN_URL = 'admins/login';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// const from = location.state?.from?.pathname || "/";
export const loginFun = createAsyncThunk('auth/loginFun', async (item, thunkAPI) => {
    // const navigate = useNavigate();
    // const location = useLocation();
    const { rejectWithValue } = thunkAPI
    try {
        const response = await axios.post(LOGIN_URL,
            item,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                },
            }
        )
            .then((res) => res).catch(error => error)

        // navigate('/jkldf');
        // window.location.hostname('/ldjkf')
        // console.log('truedkljfdfkldfjkl');

        return response.data
    } catch (err) {
        return rejectWithValue(err)
    }
})



const dataUserStorage = localStorage.getItem('authData')
const loggedIn = localStorage.getItem('loggedIn')
const initialStateValue = {
    loggedIn: false,
    dataUser: {}
}


const authSlice = createSlice({
    name: 'auth',
    // initialState: {dataUser},
    initialState: {
        loggedIn: loggedIn ? true : false,
        dataUser: dataUserStorage ? dataUserStorage : initialStateValue,
        error: null
    },
    extraReducers: {
        [loginFun.pending]: (state, action) => {
            state.loggedIn = false;
        },
        [loginFun.fulfilled]: (state, action) => {
            state.loggedIn = true;
            state.dataUser = action.payload.data;
            console.log('action.payload', action.payload.data);
            localStorage.setItem("authData", JSON.stringify(action.payload.data))
            localStorage.setItem("loggedIn", true)
            localStorage.setItem("loggingIn", true)
        },
        [loginFun.rejected]: (state, action) => {
            state.loggedIn = false;
            state.error = 'email or password is invalid';
            console.log('action', action);
        },
    },
})

// export const {logInOut} = authSlice.actions

export default authSlice.reducer