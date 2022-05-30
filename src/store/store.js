import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import StateSlice from './StateSlice'
import auth from './authSlice'

export const store = configureStore({
  reducer: {
      clint : ClintSlice,
      ShowAndHide : StateSlice,
      auth: auth
  },
})