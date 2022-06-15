import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
  value: {
    nav:false,
    add: false,
    Shipping: false,
    driver: false,
    currency: false,
    manager: false,
    quotes: false,
    stop: false,
    delete: false,
    overLay: false
  }
}

const StateSlice = createSlice({
  name: 'ShowAndHide',
  initialState,
  reducers: {
    ShowNav(state, actions) {
      state.value.nav = !false
      
      state.value.overLay = true

    },
    ShowAdd(state, actions) {
      state.value.add = actions.payload
      state.value.overLay = true
      console.log(actions)
    },
    addShipping(state, actions) {
      state.value.Shipping = actions.payload
      state.value.overLay = true
    },
    AddDriver(state, actions) {
      state.value.driver = actions.payload
      state.value.overLay = true
    },
    AddCurrency(state, actions) {
      state.value.currency = actions.payload
      state.value.overLay = true
    },
    AddManager(state, actions) {
      state.value.manager = actions.payload
      state.value.overLay = true
    },
    AddQuotes(state, actions) {
      state.value.quotes = actions.payload
      state.value.overLay = true
    },
    ShowStop(state, actions) {
      state.value.stop = actions.payload
      state.value.overLay = true

    },
    ShowDelete(state, actions) {
      state.value.delete = actions.payload
      state.value.overLay = true

    },
    HideSlider(state, actions) {
      state.value.nav = actions.payload
      state.value.add = actions.payload
      state.value.Shipping = actions.payload
      state.value.driver = actions.payload
      state.value.currency = actions.payload
      state.value.quotes = actions.payload
      state.value.manager = actions.payload
      state.value.stop = actions.payload
      state.value.delete = actions.payload
      state.value.overLay = false





    },

  },
})

export const {ShowNav, ShowAdd, addShipping, AddDriver, AddManager, AddCurrency, AddQuotes, ShowStop, ShowDelete, HideSlider } = StateSlice.actions
export default StateSlice.reducer