import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../api/axios'


// get data Currency
export const getCurrency = createAsyncThunk('currency/getCurrency', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get('currency')
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data Active Currency
export const getActiveDrivers = createAsyncThunk('currency/getActiveDrivers', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get('admins/Currency/active')
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
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
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
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
    // console.log('data added to store', response.data);
    return response.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    // console.log('rejectWithValue(err.message)', dataClint);

    return rejectWithValue(err.message)
  }
})

// changeStatusCurrency
export const changeStatusCurrency = createAsyncThunk('currency/changeStatusCurrency', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`currency/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteCurrency
export const deleteCurrency = createAsyncThunk('currency/deleteCurrency', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`currency/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('currency/handleListView', (status) => {

  return status

})



export const CurrencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    activeDrivers: [],
    CurrencyDetails: {},
    error: null,
    listView: true,
  },
  extraReducers: {

    //get  Currency
    [getCurrency.pending]: (state, action) => {
      state.error = null;
    },
    [getCurrency.fulfilled]: (state, action) => {
      state.currencies = action.payload;
    },
    [getCurrency.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
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
      // console.log(action);
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
      // console.log('action', action);
    },
    // SendCurrency
    [SendCurrency.pending]: (state, action) => {
      state.error = null;
    },
    [SendCurrency.fulfilled]: (state, action) => {
      state.currencies.push(action.payload);
    },
    [SendCurrency.rejected]: (state, action) => {
      state.error = action.payload;
      // console.log(action);
    },
    [deleteCurrency.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.clientDrivers.filter(drivers => drivers.id != action.meta.arg.id);
      state.clientDrivers = filter
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },
    [changeStatusCurrency.fulfilled]: (state, action) => {
      // state.isLoading = false;
      // const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
      // state.clients2 = filter
      // // console.log('filter', filter);
      // // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default CurrencySlice.reducer