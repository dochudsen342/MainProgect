import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CounterShema } from "../types/counterSchema"


const initialState:CounterShema = {
    value:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})


export const {actions:counterAction} = counterSlice

export const {reducer:counterReducer} = counterSlice