import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticleListLimit } from "../../selectors/getArticlePageSelectors/getArticlePageSelectors";

interface FetchArticleListProps {
  page?:number,
}


export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
  'articlePage/fetchArticleList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue,getState } = thunkAPI
    const {page = 1} = props
    const limit = getArticleListLimit(getState())

    try {
      const responce = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
          _limit:limit,
          _page:page
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