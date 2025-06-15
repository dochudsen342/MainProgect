import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserSchema } from "../types/userSchema"



const initialState:UserSchema = {}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  },
})


export const {actions:userAction} = userSlice

export const {reducer:userReducer} = userSlice