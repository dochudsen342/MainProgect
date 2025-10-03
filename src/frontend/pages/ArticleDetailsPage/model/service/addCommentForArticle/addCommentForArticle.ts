import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData/getArticleDetailsData'
import { Comment } from 'entities/Comment'
import { getAuthData } from 'entities/User'
import { fetchCommentsByArticleId } from 'features/ArticleCommentList'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const userData = getAuthData(getState())
    const articleData = getArticleDetailsData(getState())

    if (!userData || !articleData || !text) {
      return rejectWithValue('error')
    }

    try {
      const responce = await extra.api.post<Comment>(`/comments`, {
        articleId: articleData.id,
        userId: userData.id,
        text: text,
      })
      dispatch(fetchCommentsByArticleId(articleData.id))
      return responce.data
    } catch (error) {
      return rejectWithValue('error')
    }
  },
)
