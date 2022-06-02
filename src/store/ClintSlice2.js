import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Logo2 from "../photo/slogan/slogan1.svg"
import Logo3 from "../photo/slogan/slogan2.svg"
import Logo4 from "../photo/slogan/slogan3.svg"
import { get } from '../api/axios'



export const getClients2 = createAsyncThunk('clients2/getClients2', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
     const res =  await get('restaurants')
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
})

export const getClientDetails = createAsyncThunk('clients2/getClientDetails', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
     const res = await get(`restaurants/show/${id}`)
     return res.data
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
})



export const ClintSlice = createSlice({
  name: 'clients2',
  initialState: {
    clients2: [],
    clientDetails: [{}],
    error: null ,
    blackList:localStorage.getItem("blackList")  ? JSON.parse(localStorage.getItem("blackList")) :[

    ]
    
    },
  extraReducers: {
        [getClients2.pending]: (state, action) => {
          state.error = null;
        },
        [getClients2.fulfilled]: (state, action) => {
          state.clients2 = action.payload;
        },
        [getClients2.rejected]: (state, action) => {
          state.error = action;
          console.log('action', action);
        },


        [getClientDetails.pending]: (state, action) => {
          state.error = null;
        },
        [getClientDetails.fulfilled]: (state, action) => {
          state.clientDetails = action.payload;
        },
        [getClientDetails.rejected]: (state, action) => {
          state.error = action;
          console.log(action);
        },
  },
  reducer :{
         addClintBlackList: (state ,action) => {
       const FindMenueIndex =  state.blackList.findIndex((item) => item.name == action.payload.name)
         if (FindMenueIndex >= 0) {
             state.blackList[FindMenueIndex].quantityUp += 1 
         }else{
             const CartDistracture = {...action.payload ,quantityUp : 1}
             state.blackList.push(CartDistracture)
             state.clients2 = state.clients2.filter(item =>item.user_id !== action.payload.userid)
         }
         localStorage.setItem("blackList",JSON.stringify(state.blackList))
         localStorage.setItem("clients2",JSON.stringify(state.clients2))
  }
}
})


        
    


// Action creators are generated for each case reducer function
export const { addClint, removeClint,ReturnClint, editClint ,addClintBlackList } = ClintSlice.actions

export default ClintSlice.reducer