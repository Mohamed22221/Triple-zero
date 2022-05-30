import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
const LOGIN_URL = 'admins/login';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// const from = location.state?.from?.pathname || "/";
export const loginM = createAsyncThunk('auth/login', async(item, thunkAPI) => {
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
            );

            // navigate('/jkldf');
            window.location.hostname('/ldjkf')
            console.log('truedkljfdfkldfjkl');
            return response
        } catch (err) {
            return rejectWithValue(err.message)
        }
})



const dataUser = JSON.parse(localStorage.getItem('authData'))
const authSlice = createSlice({
    name: 'auth',
    // initialState: {dataUser},
    initialState: {dataUser},
    extraReducers: {
        [loginM.pending]: (state, action) => {
            state.isLoggedIn = false;
        },
       [loginM.fulfilled]: (state, action) => {
           console.log(action);
           state.isLoggedIn = true;
           state.user = action.payload;
           localStorage.setItem("authData",JSON.stringify(state))
       },
        [loginM.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
    },
})

// export const {logInOut} = authSlice.actions

export default authSlice.reducer