import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import {
  getArticleListLimit,
  getArticleListOrder,
  getArticleListPage,
  getArticleListSearch,
  getArticleListSort,
  getArticleListTypeValue,
} from '../../selectors/getArticlePageSelectors/getArticlePageSelectors'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import { ArcticleType } from 'entities/Article/model/types/article'

interface FetchArticleListProps {
  replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlePage/fetchArticleList', async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI
  const limit = getArticleListLimit(getState())
  const page = getArticleListPage(getState())
  const sort = getArticleListSort(getState())
  const order = getArticleListOrder(getState())
  const search = getArticleListSearch(getState())
  const type = getArticleListTypeValue(getState())
  try {
    addQueryParams({
      sort,
      search,
      order,
      type,
    })
    const responce = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArcticleType.ALL ? undefined : type,
      },
    })
    if (!responce.data) {
      throw new Error()
    }
    return responce.data
  } catch (error) {
    return rejectWithValue('error')
  }
})
