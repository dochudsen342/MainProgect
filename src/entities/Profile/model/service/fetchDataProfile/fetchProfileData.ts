import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";



export const fetchProfileData = createAsyncThunk<Profile, void,ThunkConfig<string> >(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const {extra,rejectWithValue} = thunkAPI
    try {
      const responce = await extra.api.get<Profile>('/profile')
<<<<<<< HEAD

=======
>>>>>>> 8416dd9e1dfcf3d14a232353dc9ff609e99f6d75
      return responce.data
    } catch (error){
      return rejectWithValue('error')
    }
  }
)