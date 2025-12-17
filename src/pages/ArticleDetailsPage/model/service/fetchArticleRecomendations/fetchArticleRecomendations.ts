import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '@/entities/Article'

export const fetchArticleRecomendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlePage/fetchArticleRecomendations',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const responce = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
          _limit: 4,
        },
      })
      if (!responce.data) {
        throw new Error()
      }
      return responce.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
