import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = { 
  value: {
    add:false,
    stop:false,
    delete:false,
    overLay:false
  }
}

const StateSlice = createSlice({
  name: 'ShowAndHide',
  initialState,
  reducers: {
    ShowAdd(state , actions) {
      state.value.add = actions.payload
      state.value.overLay = true

  },
    ShowStop(state , actions) {
        state.value.stop = actions.payload
        state.value.overLay = true

    },
    ShowDelete(state , actions) {
      state.value.delete = actions.payload
      state.value.overLay = true
      
  },
    HideSlider(state , actions) {
        state.value.add = actions.payload
        state.value.stop = actions.payload
        state.value.delete = actions.payload
        state.value.overLay = false


        
        

    },

  },
})

export const { ShowAdd,ShowStop,ShowDelete, HideSlider } = StateSlice.actions
export default StateSlice.reducer