import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getCreateArticleBlocks,
  getCreateArticleImgLink,
  getCreateArticleSubtitle,
  getCreateArticleTitle,
  getCreateArticleType,
  getCreateArticleViews,
} from '../selectors/createArticleSelectors'
import { getAuthData } from 'entities/User'
import { ArticleBlock } from 'entities/Article/model/types/article'
import { CreateArticleForm } from '../types/createArticleFormSchema'

export const fetchCreateArticle = createAsyncThunk<CreateArticleForm, void, ThunkConfig<string>>(
  'articlePage/fetchCreateArticle',
  async (_, thunkAPI) => {
    const { extra, getState, rejectWithValue } = thunkAPI
    const articletitle = getCreateArticleTitle(getState())
    const articleImg = getCreateArticleImgLink(getState())
    const articleSubtitle = getCreateArticleSubtitle(getState())
    const articleType = getCreateArticleType(getState())
    const articleVeiws = getCreateArticleViews(getState())
    const articleBlock: ArticleBlock[] = getCreateArticleBlocks(getState())
    const userData = getAuthData(getState())
    const date = new Date()
    const currentDate = date
      .toLocaleDateString('ru-RU')
      .replace(/(\d+)\.(\d+)\.(\d+)/, '$1.$2.$3'.slice(-2))
    try {
      const response = await extra.api.post('/articles', {
        title: articletitle,
        subtitle: articleSubtitle,
        img: articleImg,
        userId: userData?.id,
        createdDate: currentDate,
        type: articleType,
        views: articleVeiws,
        blocks: articleBlock,
      })
      return response.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)
