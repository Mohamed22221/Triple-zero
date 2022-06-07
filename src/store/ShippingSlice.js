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

  
  // changeStatusShipping
  export const changeStatusShipping = createAsyncThunk('shipping/changeStatusShipping', async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI

      try {
      const res = await get(`users/status/${id}`)
      return res.data
    } catch (err) {
      console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
        return rejectWithValue(err.message)
    }
  })

  // deleteShipping
  export const deleteShipping = createAsyncThunk('shipping/deleteShipping', async (id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI

      try {
      const res = await get(`users/destroy/${id}`)
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
            state.ShippingDetailsDetails = action.payload;
          },
          [getShippingDetails.rejected]: (state, action) => {
            state.error = action;
            console.log(action);
          },

          [changeStatusShipping.fulfilled]: (state, action) => {
            // state.isLoading = false;
            const filter = state.shipping.filter(shipping => shipping.id != action.meta.arg.id);
            state.shipping = filter
            console.log('filter', filter);
            console.log('action form fulfilled', action.meta.arg);
          },
          [deleteShipping.fulfilled]: (state, action) => {
            // state.isLoading = false;
            const filter = state.shipping.filter(shipping => shipping.id != action.meta.arg.id);
            state.shipping = filter
            console.log('filter', filter);
            console.log('action form fulfilled', action.meta.arg);
          },

       
    },

  })
  
  
          
      
  
  
  // Action creators are generated for each case reducer function

  
  export default ShippingSlice.reducer