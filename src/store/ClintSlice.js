import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Logo2 from "../photo/slogan/slogan1.svg"
import Logo3 from "../photo/slogan/slogan2.svg"
import Logo4 from "../photo/slogan/slogan3.svg"
import { get } from './../api/axios'


const initialState =  {
  DataUser :localStorage.getItem("DataUser")   ? JSON.parse(localStorage.getItem("DataUser")) : [
    
    {
      id: 1,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "سالم العتيبي1",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 7,
      paymentDate: "4/6/2022",
      state: "تاخر الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",
    },
    {
      id: 2,
      logo: Logo2 ,
      idUser : "#532Bn2 ",
      name : "جاسم احمد",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 1,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 3,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "جاسم سامي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 2,
      paymentDate: "3/6/2021",
      state: "تاخر الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 4,
      logo: Logo4 ,
      idUser : "#532Bn2 ",
      name : "فوزي سيد",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 11,
      paymentDate: "7/6/2021",
      state: "تاخر الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 5,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "احمد علي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 6,
      paymentDate: "11/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 6,
      logo: Logo2 ,
      idUser : "#532Bn2 ",
      name : "كمال العتيبي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 3,
      paymentDate: "1/7/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

      
    }, 
    {
      id: 7,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "محمد جاسم",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 2,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 8,
      logo: Logo4 ,
      idUser : "#532Bn2 ",
      name : "سامي جاسم",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 6,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
     {
      id: 9,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "سالم جاسم",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 8 ,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
     {
      id: 10,
      logo: Logo2 ,
      idUser : "#532Bn2 ",
      name : "علي فوزي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 3 ,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 11,
      logo: Logo4 ,
      idUser : "#532Bn2 ",
      name : "كمال مراد",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 5,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
     {
      id: 11,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "سلمي سيد",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 1,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },   
     {
      id: 13,
      logo: Logo2 ,
      idUser : "#532Bn2 ",
      name : "سالم شادي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 6,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
    {
      id: 14,
      logo: Logo2 ,
      idUser : "#532Bn2 ",
      name : "مراد العتيبي1",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 15,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },
     {
      id: 15,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "سالم علي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 18,
      paymentDate: "5/6/2021",
      state: "لم يتم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري" ,
      compony:"مازيني",
      ReasonDelete:"فسخ العقد" ,
      DeleteDate: "4/6/2022",

    },      
],
blackList:localStorage.getItem("blackList")  ? JSON.parse(localStorage.getItem("blackList")) :[

]
}

export const getClients = createAsyncThunk('clients/getClients', async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

     try {
      // const token = localStorage.getItem('token');
      await get('users').then(response => {
        console.log('response11:' , response.data);
    }).error(err => {
        console.log('error:' , err);
    })
  } catch (err) {
      return rejectWithValue(err.message)
  }
    // try {
    //     const res = await fetch('http://localhost:3005/books');
    //     const data = await res.json();
    //     // // console.log(data);
    //     return data
    // } catch (err) {
    //     return rejectWithValue(err.message)
    // }
})

// export const ReturnClint = (state ,action) => {
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

//   }


export const ClintSlice = createSlice({
  name: 'clint',
  initialState,
  extraReducers: {
        [getClients.pending]: (state, action) => {
          // state.isLoading = true;
          state.error = null;
          // console.log(action);
        },
        [getClients.fulfilled]: (state, action) => {
          // state.isLoading = false;
          state.books = action.payload;
          console.log('action form fulfilled', action);
          // console.log('action form fulfilled 2', state);
          // console.log('action form fulfilled 2', state.books);
        },
        [getClients.rejected]: (state, action) => {
          // state.isLoading = false;
          state.error = action.payload;
          // console.log(action);
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