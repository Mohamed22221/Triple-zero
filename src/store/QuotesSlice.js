import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../api/axios'
import swal from 'sweetalert';
// get data clints Quotes
export const getQuotes = createAsyncThunk('quotes/getQuotes', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`quotes?page=${pageId}`)
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data quotes Details
export const getQuoteDetails = createAsyncThunk('quotes/getQuoteDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`quotes/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send quotes clint 


export const SendQuote = createAsyncThunk("quotes/SendQuote", async (dataClint, thunkApi) => {
  const { rejectWithValue } = thunkApi
  try {
    const response = await postFromData("quotes/store", dataClint);
    // const data = res
    // console.log('data added to store', response.data);
    return response.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    // console.log('rejectWithValue(err.message)', dataClint);

    return rejectWithValue(err.message)
  }
})


// changeStatusQuotes
export const changeStatusQuotes = createAsyncThunk('quotes/changeStatusQuotes', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`quotes/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deletequotes
export const deleteQuote = createAsyncThunk('quotes/deleteQuote', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`quotes/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('quotes/handleListView', (status) => {

  return status

})




export const QuotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    quotes: [],
    quoteDetails: {},
    error: null,
    listView: true,
    meta: 0
  },
  extraReducers: {

    //get clint drivers
    [getQuotes.pending]: (state, action) => {
      state.error = null;
    },
    [getQuotes.fulfilled]: (state, action) => {
      state.quotes = action.payload.data;
      state.meta= action.payload.meta;
    },
    [getQuotes.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },

    //get clint Details
    [getQuoteDetails.pending]: (state, action) => {
      state.error = null;
    },
    [getQuoteDetails.fulfilled]: (state, action) => {
      state.quoteDetails = action.payload;
    },
    [getQuoteDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
    //send data clint  
    [SendQuote.pending]: (state, action) => {
      state.error = null;
    },
    [SendQuote.fulfilled]: (state, action) => {
      state.quotes.push(action.payload);
      state.total = state.total + 1;
      // TODO: ALERT 
      // swal("تم تنفيذ الامر بنجاح", {
      //   icon: "success",
      //   button: 'موافق'
      // });



    },

    [changeStatusQuotes.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.quotes.filter(quotes => quotes.id != action.meta.arg.id);
      state.quotes = filter
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },
    [deleteQuote.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.quotes.filter(quotes => quotes.id != action.meta.arg.id);
      state.quotes = filter
      state.total = state.total - 1;
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default QuotesSlice.reducer