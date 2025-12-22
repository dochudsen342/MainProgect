import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('comments/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  if (!articleId) {
    return rejectWithValue('error')
  }
  try {
    const responce = await extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
        _expand: 'user',
      },
    })
    return responce.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
