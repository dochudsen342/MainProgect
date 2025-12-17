import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import {
  getArticleListHasMore,
  getArticleListIsLoading,
  getArticleListPage,
} from '../../selectors/getArticlePageSelectors/getArticlePageSelectors'
import { articlePageAction } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList.ts/fetchArticleList'

export const fetchNextArticlesPart = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchNextArticlesPart',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const hasMore = getArticleListHasMore(getState())
    const page = getArticleListPage(getState())
    const isLoading = getArticleListIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(articlePageAction.setPage(page + 1))
      dispatch(fetchArticleList({}))
    }
  }
)
