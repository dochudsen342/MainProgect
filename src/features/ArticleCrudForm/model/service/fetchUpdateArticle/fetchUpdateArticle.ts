import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '@/entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCrudArticleData } from '../../selectors/getCrudArticleSelectors/getCrudArticleSelectors'

export const fetchUpdateArticle = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleEditPage/fetchEditArticle',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const data = getCrudArticleData(getState())
    if (!data) {
      throw new Error()
    }
    try {
      const responce = await extra.api.put<Article>(`/articles/${articleId}`, data)
      if (!responce.data) {
        throw new Error()
      }
      return responce.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
