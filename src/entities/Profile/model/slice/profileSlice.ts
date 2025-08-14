import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProfileData } from "../service/fetchDataProfile/fetchProfileData";
import { Profile, ProfileSchema } from "../types/profile";

const initialState:ProfileSchema = {
    data:undefined,
    isLoading:false,
    error:'',
    readonly:true,
}

export const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        getProfile:() =>{

        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProfileData.pending,(state) =>{
            state.isLoading = true
            state.error = undefined
        }).
        addCase(fetchProfileData.fulfilled, (state,actions:PayloadAction<Profile>) =>{
            state.data = actions.payload
            state.isLoading = false
        }).
        addCase(fetchProfileData.rejected,(state,actions) =>{
            state.error = actions.payload
            state.isLoading = false
        })
    }
})

export const  {actions:profileActions} = profileSlice
export const {reducer:profileReducer} = profileSlice

