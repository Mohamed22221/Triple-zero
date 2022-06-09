import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get ,post, postFromData } from '../api/axios'
import swal from 'sweetalert';
// get data Currency
export const getCurrency = createAsyncThunk('currency/getCurrency', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
  
     try {
     const res =  await get('currency')
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
  })
// get data Active Currency
export const getActiveDrivers = createAsyncThunk('drivers/getActiveDrivers', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
  
     try {
     const res = await get('admins/drivers/active')
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
  })
  
  
  // get data Currency Details
  export const getCurrencyDetails = createAsyncThunk('currency/getCurrencyDetails', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
  
     try {
     const res = await get(`currency/show/${id}`)
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
  })
  // send data  Currency Details
  export const SendCurrency = createAsyncThunk("currency/SendCurrency", async (dataClint, thunkApi) => {
    const {
      rejectWithValue
    } = thunkApi
    try {
      const response = await postFromData("currency/store", dataClint);
      // const data = res
      console.log('data added to store', response.data);
      return response.data
    } catch (err) {
      console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      console.log('rejectWithValue(err.message)', dataClint);
  
      return rejectWithValue(err.message)
    }
  })

// changeStatusCurrency
export const changeStatusDriver = createAsyncThunk('drivers/changeStatusDriver', async (id, thunkAPI) => {
    const {
      rejectWithValue
    } = thunkAPI
  
    try {
      const res = await get(`admins/drivers/status/${id}`)
      return res.data
    } catch (err) {
      console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
    }
  })

// deleteCurrency
export const deleteDriver = createAsyncThunk('drivers/deleteDriver', async (id, thunkAPI) => {
    const {
      rejectWithValue
    } = thunkAPI
  
    try {
      const res = await post(`admins/drivers/destroy/${id}`)
      return res.data
    } catch (err) {
      console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
    }
  })

  export const CurrencySlice = createSlice({
    name: 'currency',
    initialState: {
        currencys: [],
        activeDrivers: [],
        CurrencyDetails: {},
        error: null ,
      
      },
    extraReducers: {

         //get  Currency
         [getCurrency.pending]: (state, action) => {
            state.error = null;
          },
          [getCurrency.fulfilled]: (state, action) => {
            state.currencys = action.payload;
          },
          [getCurrency.rejected]: (state, action) => {
            state.error = action;
            console.log('action', action);
          },
         //get Currency Details
          [getCurrencyDetails.pending]: (state, action) => {
            state.error = null;
          },
          [getCurrencyDetails.fulfilled]: (state, action) => {
            state.CurrencyDetails = action.payload;
          },
          [getCurrencyDetails.rejected]: (state, action) => {
            state.error = action;
            console.log(action);
          },
          //getActiveCurrency
          [getActiveDrivers.pending]: (state, action) => {
            state.error = null;
          },
          [getActiveDrivers.fulfilled]: (state, action) => {
            state.activeDrivers = action.payload;
          },
          [getActiveDrivers.rejected]: (state, action) => {
            state.error = action;
            console.log('action', action);
          },
         // SendCurrency
         [SendCurrency.pending]: (state, action) => {
            state.error = null;
         },
         [SendCurrency.fulfilled]: (state, action) => {
           state.currencys.push(action.payload);
         },
         [SendCurrency.rejected]: (state, action) => {
           state.error = action.payload;
           console.log(action);
         },   
         [deleteDriver.fulfilled]: (state, action) => {
            // state.isLoading = false;
            const filter = state.clientDrivers.filter(drivers => drivers.id != action.meta.arg.id);
            state.clientDrivers = filter
            console.log('filter', filter);
            console.log('action form fulfilled', action.meta.arg);
          },
         [changeStatusDriver.fulfilled]: (state, action) => {
            // state.isLoading = false;
            // const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
            // state.clients2 = filter
            // console.log('filter', filter);
            // console.log('action form fulfilled', action.meta.arg);
          },      

       
    },

  })
  
  
          
      
  
  
  // Action creators are generated for each case reducer function

  
  export default CurrencySlice.reducer