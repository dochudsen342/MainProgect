import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getEditableArticleData } from '../selectors/getEditableArticleSelectors'

export const fetchUpdateArticle = createAsyncThunk<Article, void, ThunkConfig<string>>(
  'articleEditPage/fetchEditArticle',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const data = getEditableArticleData(getState())
    if (!data) {
      throw new Error()
    }
    try {
      const responce = await extra.api.put<Article>(`/articles/${data?.id}`, data)
      if (!responce.data) {
        throw new Error()
      }
      return responce.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
