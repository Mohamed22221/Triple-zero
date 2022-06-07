import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import ClintSlice2 from './ClintSlice2'
import ShippingSlice from './ShippingSlice'
import StateSlice from './StateSlice'


import auth from './authSlice'

export const store = configureStore({
  reducer: {
      clint : ClintSlice,
      clients2: ClintSlice2,
      shipping : ShippingSlice,
      ShowAndHide : StateSlice,
      auth: auth
  },
})