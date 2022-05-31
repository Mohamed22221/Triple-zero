import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Logo2 from "../photo/slogan/slogan1.svg"
import Logo3 from "../photo/slogan/slogan2.svg"
import Logo4 from "../photo/slogan/slogan3.svg"
import { get } from '../api/axios'



export const getClients2 = createAsyncThunk('clients2/getClients2', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
     const res =  await get('users')
     return res.data
    //   await get('users').then(response => {
    //     console.log('response11:' , response.data);
    // }).error(err => {
    //     console.log('error:' , err);
    // })
  } catch (err) {
    console.log('rejectWithValue(err.message)', rejectWithValue(err.message));
      return rejectWithValue(err.message)
  }
})


export const ClintSlice = createSlice({
  name: 'clients2',
  initialState: {clients2: [], error: null},
  extraReducers: {
        [getClients2.pending]: (state, action) => {
          // state.isLoading = true;
          state.error = null;
          // console.log(action);
        },
        [getClients2.fulfilled]: (state, action) => {
          // state.isLoading = false;
          state.clients2 = action.payload;
          // console.log('action form fulfilled', action);
          // console.log('action form fulfilled 2', state);
          // console.log('action form fulfilled 2', state.books);
        },
        [getClients2.rejected]: (state, action) => {
          // state.isLoading = false;
          state.error = action;
          console.log(action);
        },
  }
  // reducers: {
  //   addClint: (state ,action) => {
  //     const FindMenueIndex =  state.DataUser.findIndex((item) => item.name == action.payload.name)
  //     if (FindMenueIndex >= 0) {
  //         state.DataUser[FindMenueIndex].quantityUp += 1 
  //     }else{
  //         const CartDistracture = {...action.payload ,quantityUp : 1}
  //         state.DataUser.push(CartDistracture)
  //     }
  //     localStorage.setItem("DataUser",JSON.stringify(state.DataUser))
      
        
  //   },
  //   addClintBlackList: (state ,action) => {
  //     const FindMenueIndex =  state.blackList.findIndex((item) => item.name == action.payload.name)
  //       if (FindMenueIndex >= 0) {
  //           state.blackList[FindMenueIndex].quantityUp += 1 
  //       }else{
  //           const CartDistracture = {...action.payload ,quantityUp : 1}
  //           state.blackList.push(CartDistracture)
  //           state.DataUser = state.DataUser.filter(item =>item.idUser !== action.payload.userid)
  //       }
  //       localStorage.setItem("blackList",JSON.stringify(state.blackList))
  //       localStorage.setItem("DataUser",JSON.stringify(state.DataUser))
        
    
  //  },
  //   removeClint: (state ,action) => {
  //     state.blackList = state.blackList.filter(item => item.userid !== action.payload.userid)
  //     localStorage.setItem("DataUser",JSON.stringify(state.DataUser))
  //     localStorage.setItem("blackList",JSON.stringify(state.blackList))

  //   },
  //   ReturnClint: (state ,action) => {
  //     const FindMenueIndex =  state.DataUser.findIndex((item) => item.name == action.payload.name)
  //     if (FindMenueIndex >= 0) {
  //         state.DataUser[FindMenueIndex].quantityUp += 1 
  //     }else{
  //         const CartDistracture = {...action.payload ,quantityUp : 1}
  //         state.DataUser.push(CartDistracture)
  //         state.blackList = state.blackList.filter(item => item.userid !== action.payload.idUser)
  //     }
  //     localStorage.setItem("blackList",JSON.stringify(state.blackList))
  //     localStorage.setItem("DataUser",JSON.stringify(state.DataUser))
      
  //   },
  //   editClint: (state, action) => {
  //    const myDataEdit = state.DataUser.find((item =>item.idUser == action.payload.idUser))
  //    if (myDataEdit) {
  //     myDataEdit.logo = action.payload.logo
  //     myDataEdit.idUser = action.payload.idUser
  //     myDataEdit.name = action.payload.name
  //     myDataEdit.dateSubscription = action.payload.dateSubscription
  //     myDataEdit.price = action.payload.price
  //     myDataEdit.duration = action.payload.duration
  //     myDataEdit.paymentDate =action.payload. paymentDate
  //     myDataEdit.state = action.payload.state
  //     myDataEdit.websitelink = action.payload.websitelink
  //     myDataEdit.clintemail = action.payload.clintemail
  //     myDataEdit.compony = action.payload.compony
  //     myDataEdit.currencypaid = action.payload.currencypaid
  //     myDataEdit.ReasonDelete = action.payload.ReasonDelete
  //     myDataEdit.DeleteDate = action.payload.DeleteDate

  //    }
  //    localStorage.setItem("DataUser",JSON.stringify(state.DataUser))
  //   },
  // },
})

// Action creators are generated for each case reducer function
export const { addClint, removeClint,ReturnClint, editClint ,addClintBlackList } = ClintSlice.actions

export default ClintSlice.reducer