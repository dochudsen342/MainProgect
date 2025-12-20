import { ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileRating } from '../types/profileRating'

interface ProfileRatingFetchProps {
  userId: string
  rate: number
}

export const fetchProfileRatingUpdate = createAsyncThunk<
  ProfileRating[],
  ProfileRatingFetchProps,
  ThunkConfig<string>
>('articlePage/fetchArticleList', async (arg, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  try {
    const responce = await extra.api.post<ProfileRating[]>(`/articles`, arg, {
      params: {
        userId: arg.userId,
      },
    })
    if (!responce.data) {
      throw new Error()
    }
    return responce.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
