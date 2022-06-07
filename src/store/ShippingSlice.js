import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get ,post, postFromData } from '../api/axios'
// get data clints drivers
export const getShipping = createAsyncThunk('shipping/getShipping', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
  
     try {
     const res =  await get('users')
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
  })
  // get data clint driver Details
  export const getShippingDetails = createAsyncThunk('shipping/getShippingDetails', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
  
     try {
     const res = await get(`users/show/${id}`)
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
  })







  export const ShippingSlice = createSlice({
    name: 'shipping',
    initialState: {
      shipping: [],
      ShippingDetailsDetails: {},
      error: null ,
      
      },
    extraReducers: {

          //get clint drivers
          [getShipping.pending]: (state, action) => {
            state.error = null;
          },
          [getShipping.fulfilled]: (state, action) => {
            state.shipping = action.payload;
          },
          [getShipping.rejected]: (state, action) => {
            state.error = action;
            console.log('action', action);
          },

           //get clint Details
          [getShippingDetails.pending]: (state, action) => {
            state.error = null;
          },
          [getShippingDetails.fulfilled]: (state, action) => {
            state.ClientShipping = action.payload;
          },
          [getShippingDetails.rejected]: (state, action) => {
            state.error = action;
            console.log(action);
          },
       
    },

  })
  
  
          
      
  
  
  // Action creators are generated for each case reducer function

  
  export default ShippingSlice.reducer