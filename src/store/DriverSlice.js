import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../api/axios'
import swal from 'sweetalert';
// get data clints drivers
export const getDrivers = createAsyncThunk('drivers/getDrivers', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`admins/drivers?page=${pageId}`) 
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data Active drivers
export const getActiveDrivers = createAsyncThunk('drivers/getActiveDrivers', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get('admins/drivers/active')
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// get data clint driver Details
export const getDriverDetails = createAsyncThunk('drivers/getDriverDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`admins/drivers/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send data  driver Details
export const SendDirver = createAsyncThunk("drivers/SendDirver", async (dataClint, thunkApi) => {
  const {
    rejectWithValue
  } = thunkApi
  try {
    const response = await postFromData("admins/drivers/store", dataClint);
    // const data = res
    // console.log('data added to store', response.data);
    return response.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    // console.log('rejectWithValue(err.message)', dataClint);

    return rejectWithValue(err.message)
  }
})

// changeStatusDriver
export const changeStatusDriver = createAsyncThunk('drivers/changeStatusDriver', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await get(`admins/drivers/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteDriver
export const deleteDriver = createAsyncThunk('drivers/deleteDriver', async (id, thunkAPI) => {
  const {
    rejectWithValue
  } = thunkAPI

  try {
    const res = await post(`admins/drivers/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})


// handleListView
export const handleListView = createAsyncThunk('drivers/handleListView', (status) => {

  return status

})


export const DriverSlice = createSlice({
  name: 'drivers',
  initialState: {
    drivers: [],
    activeDrivers: [],
    driverDetails: {},
    error: null,
    listView: true,
    meta: 0
  },
  extraReducers: {

    //get clint drivers
    [getDrivers.pending]: (state, action) => {
      state.error = null;
    },
    [getDrivers.fulfilled]: (state, action) => {
      state.drivers = action.payload.data;
      state.meta= action.payload.meta;
    },
    [getDrivers.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },



    //get Driver Details
    [getDriverDetails.pending]: (state, action) => {
      state.error = null;
    },
    [getDriverDetails.fulfilled]: (state, action) => {
      state.driverDetails = action.payload;
    },
    [getDriverDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
    //getActiveDrivers
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
    // SendDirver  
    [SendDirver.pending]: (state, action) => {
      state.error = null;
    },
    [SendDirver.fulfilled]: (state, action) => {
      state.drivers.push(action.payload);
      state.total = state.total + 1;
    },
    [SendDirver.rejected]: (state, action) => {
      state.error = action.payload;
      // console.log(action);
    },
    [deleteDriver.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.drivers.filter(drivers => drivers.id != action.meta.arg.id);
      state.drivers = filter
      state.total = state.total - 1;
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },
    [changeStatusDriver.fulfilled]: (state, action) => {      
      // state.isLoading = false;
      // const filter = state.clients2.filter(client => client.id != action.meta.arg.id);
      // state.clients2 = filter
      // // console.log('filter', filter);
      // // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default DriverSlice.reducer