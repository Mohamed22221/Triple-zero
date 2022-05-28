import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'
import StateSlice from './StateSlice'

export const store = configureStore({
  reducer: {
      clint : ClintSlice,
      ShowAndHide : StateSlice
  },
})