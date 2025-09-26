import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";




export const fetchArticleById = createAsyncThunk<Article,string,ThunkConfig<string> >(
  'article/fetchArticleById',
  async (articleId, thunkAPI) => {
    const {extra,rejectWithValue} = thunkAPI
    try {
      const responce = await extra.api.get<Article>(`/articles/${articleId}`,{
        params:{
          _expand:'user'
        }
      })
      
      if(!responce.data){
        throw new Error()
      }
      return responce.data
    } catch (error){
      return rejectWithValue('error')
    }
  }
)