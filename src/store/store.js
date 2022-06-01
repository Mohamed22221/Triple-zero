import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import ClintSlice2 from './ClintSlice2'
import StateSlice from './StateSlice'
import auth from './authSlice'

export const store = configureStore({
  reducer: {
      clint : ClintSlice,
      clients2: ClintSlice2,
      ShowAndHide : StateSlice,
      auth: auth
  },
})