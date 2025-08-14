import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, UserSchema } from "../types/userSchema"
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage"



const initialState:UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state,actions:PayloadAction<User>) =>{
      state.authData = actions.payload
    },
    initAuthData: (state) =>{
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if(user) state.authData = JSON.parse(user)
      state._mounted = true
    },
    logout: (state) =>{
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  },
})


export const {actions:userAction} = userSlice

export const {reducer:userReducer} = userSlice