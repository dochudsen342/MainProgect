import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getAuthData } from '@/entities/User'
import { Article } from '@/entities/Article/model/types/article'
import { getCrudArticleData } from '../../selectors/getCrudArticleSelectors/getCrudArticleSelectors'

export const fetchCreateArticle = createAsyncThunk<Article, void, ThunkConfig<string>>(
  'articlePage/fetchCreateArticle',
  async (_, thunkAPI) => {
    const { extra, getState, rejectWithValue } = thunkAPI
    const articleData = getCrudArticleData(getState())
    const userData = getAuthData(getState())
    const date = new Date()
    const currentDate = date
      .toLocaleDateString('ru-RU')
      .replace(/(\d+)\.(\d+)\.(\d+)/, '$1.$2.$3'.slice(-2))
    try {
      const response = await extra.api.post<Article>('/articles', {
        title: articleData?.title,
        subtitle: articleData?.subtitle,
        img: articleData?.img,
        userId: userData?.id,
        createdDate: currentDate,
        type: articleData?.type,
        views: articleData?.views,
        blocks: articleData?.blocks,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
