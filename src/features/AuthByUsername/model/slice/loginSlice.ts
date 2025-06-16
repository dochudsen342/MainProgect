import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByUsername } from "../service/loginByUsername/loginByUsername"




const initialState:LoginSchema = {
    username: '',
    password: '',
    isLoading:false,
    error: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
   setUserName: (state,actions:PayloadAction<string>) => {
    state.username = actions.payload
   },
    setPassword: (state,actions:PayloadAction<string>) => {
         state.password = actions.payload
   }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending,(state) =>{
        state.error = undefined
        state.isLoading = true
        
    }).addCase(loginByUsername.fulfilled, (state,actions) => {
        state.isLoading = false
    }).addCase(loginByUsername.rejected , (state,actions) =>{
        state.isLoading = false
        state.error = actions.payload
    })

  }
})


export const {actions:loginAction} = loginSlice

export const {reducer:loginReducer} = loginSlice