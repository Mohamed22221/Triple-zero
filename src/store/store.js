import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import ClintSlice2 from './ClintSlice2'
import ShippingSlice from './ShippingSlice'
import StateSlice from './StateSlice'


import auth from './authSlice'
import ManagersSlice from './ManagersSlice'

export const store = configureStore({
  reducer: {
      clint : ClintSlice,
      clients2: ClintSlice2,
      shipping : ShippingSlice,
      ShowAndHide : StateSlice,
      managers : ManagersSlice ,
      auth: auth
  },
})