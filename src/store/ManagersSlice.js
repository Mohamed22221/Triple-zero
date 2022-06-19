import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get, post, postFromData } from '../api/axios'
import swal from 'sweetalert';

// get data Managers 
export const getManagers = createAsyncThunk('managers/getManagers', async (pageId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`admins?page=${pageId}`)
    return res
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// get data clint Managers Details
export const getManagerDetails = createAsyncThunk('managers/getManagerDetails', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`admins/show/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})
// send Managers clint 


export const SendManager = createAsyncThunk("managers/SendManager", async (dataClint, thunkApi) => {
  const { rejectWithValue } = thunkApi
  try {
    const response = await postFromData("admins/store", dataClint);
    // const data = res
    // console.log('data added to store', response.data);
    return response.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    // console.log('rejectWithValue(err.message)', dataClint);

    return rejectWithValue(err.message)
  }
})


// changeStatusManager
export const changeStatusManager = createAsyncThunk('managers/changeStatusManager', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`admins/status/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// deleteManager
export const deleteManager = createAsyncThunk('managers/deleteManager', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const res = await get(`admins/destroy/${id}`)
    return res.data
  } catch (err) {
    // console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
    return rejectWithValue(err.message)
  }
})

// handleListView
export const handleListView = createAsyncThunk('managers/handleListView', (status) => {

  return status

})




export const ManagersSlice = createSlice({
  name: 'managers',
  initialState: {
    managers: [],
    ManagerDetails: {},
    error: null,
    listView: true,
    total: 0
  },
  extraReducers: {

    //get clint drivers
    [getManagers.pending]: (state, action) => {
      state.error = null;
    },
    [getManagers.fulfilled]: (state, action) => {
      state.managers = action.payload.data;
      state.total = action.payload.meta.total;
    },
    [getManagers.rejected]: (state, action) => {
      state.error = action;
      // console.log('action', action);
    },
    [handleListView.fulfilled]: (state, action) => {
      state.listView = action.payload
    },

    //get clint Details
    [getManagerDetails.pending]: (state, action) => {
      state.error = null;
    },
    [getManagerDetails.fulfilled]: (state, action) => {
      state.ManagerDetails = action.payload;
    },
    [getManagerDetails.rejected]: (state, action) => {
      state.error = action;
      // console.log(action);
    },
    //send data clint  
    [SendManager.pending]: (state, action) => {
      state.error = null;
    },
    [SendManager.fulfilled]: (state, action) => {
      state.managers.push(action.payload);
      state.total = state.total + 1;
      // TODO: ALERT 
      // swal("تم تنفيذ الامر بنجاح", {
      //   icon: "success",
      //   button: 'موافق'
      // });



    },

    [changeStatusManager.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.managers.filter(managers => managers.id != action.meta.arg.id);
      state.managers = filter
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },

    [deleteManager.fulfilled]: (state, action) => {
      // state.isLoading = false;
      const filter = state.managers.filter(managers => managers.id != action.meta.arg.id);
      state.managers = filter
      state.total = state.total - 1;
      // console.log('filter', filter);
      // console.log('action form fulfilled', action.meta.arg);
    },


  },

})






// Action creators are generated for each case reducer function


export default ManagersSlice.reducer