import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { Comment } from "entities/Comment";



export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlePage/fetchArticleList',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const responce = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
        }
      })
      if (!responce.data) {
        throw new Error();
      }
      return responce.data
    } catch (error) {
      return rejectWithValue('error')
    }
  }
)