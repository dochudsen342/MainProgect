import { ThunkConfig } from '@/app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Rating } from '../types/types'

interface MutationArticleRating {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

export const fetchUpdateArticleRating = createAsyncThunk<
  Rating[],
  MutationArticleRating,
  ThunkConfig<string>
>('articlePage/fetchUpdateArticleRating', async (argRate, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  try {
    const responce = await extra.api.post<Rating[]>(`/article-ratings`, argRate)
    if (!responce.data) {
      throw new Error()
    }
    return responce.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
