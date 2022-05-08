import { configureStore } from '@reduxjs/toolkit'
import ClintSlice from './ClintSlice'

export const store = configureStore({
  reducer: {
      clint : ClintSlice
  },
})