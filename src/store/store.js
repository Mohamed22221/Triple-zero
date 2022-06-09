import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import ClintSlice2 from './ClintSlice2'
import ShippingSlice from './ShippingSlice'
import StateSlice from './StateSlice'
import auth from './authSlice'
import ManagersSlice from './ManagersSlice'
import DriverSlice from './DriverSlice'
import CurrencySlice from './CurrencySlice'

export const store = configureStore({
  reducer: {
      
      clint : ClintSlice,
      clients2: ClintSlice2,
      drivers: DriverSlice ,
      shipping : ShippingSlice,
      currency : CurrencySlice,
      ShowAndHide : StateSlice,
      managers : ManagersSlice ,
      auth: auth
  },
})