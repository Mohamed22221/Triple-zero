import { createSlice } from '@reduxjs/toolkit'
import Logo2 from "../photo/slogan/slogan1.svg"
import Logo3 from "../photo/slogan/slogan2.svg"
import Logo4 from "../photo/slogan/slogan3.svg"



const initialState = [
    {
      id: 1,
      logo: Logo3 ,
      idUser : "#532Bn2 ",
      name : "سالم العتيبي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 7,
      paymentDate: "4/6/2022",
      state: "تاخر الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري",
      compony:"مازيني"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
      
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
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
      currencypaid : "المصري"
    },
    {
      id: 14,
      logo: Logo2 ,
      idUser : "#532Bn2 ",
      name : "مراد العتيبي",
      dateSubscription: "5/6/2021",
      price: "$1300",
      duration: 15,
      paymentDate: "5/6/2021",
      state: "تم الدفع",
      clintemail : "info@easymedia" ,
      websitelink : "www.easymedia.agency" ,
      tradetype : "مقاولات" ,
      currencypaid : "المصري"
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
      currencypaid : "المصري"
    },      
]


export const ClintSlice = createSlice({
  name: 'clint',
  initialState,
  reducers: {
    addClint: (state ,action) => {
        state.push(action.payload)
    },
    removeClint: (state ,action) => {
      
    },
    editClint: (state, action) => {
     
    },
  },
})

// Action creators are generated for each case reducer function
export const { addClint, removeClint, editClint } = ClintSlice.actions

export default ClintSlice.reducer