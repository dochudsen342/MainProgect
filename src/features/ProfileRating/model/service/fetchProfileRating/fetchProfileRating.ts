import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ProfileRating } from '../../types/profileRating'

interface FetchProfileRatingProps {
  userId: string
}

export const fetchProfileRating = createAsyncThunk<
  ProfileRating,
  FetchProfileRatingProps,
  ThunkConfig<string>
>('profile/fetchProfileRating', async ({ userId }, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  try {
    const responce = await extra.api.get<ProfileRating>(`/profile-ratings/${userId}`)
    if (!responce.data) {
      throw new Error()
    }
    return responce.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
