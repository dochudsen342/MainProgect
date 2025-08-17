import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";



export const fetchProfileData = createAsyncThunk<Profile, string,ThunkConfig<string> >(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const {extra,rejectWithValue} = thunkAPI
    try {
      const responce = await extra.api.get<Profile>(`/profile/${profileId}`)
      return responce.data
    } catch (error){
      return rejectWithValue('error')
    }
  }
)