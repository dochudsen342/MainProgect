import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArcticleSortField } from '@/entities/Article'
import { ArcticleType } from '@/entities/Article/model/types/article'
import { SortOrder } from '@/shared/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticleListInited } from '../../selectors/getArticlePageSelectors/getArticlePageSelectors'
import { articlePageAction } from '../../slice/articlePageSlice'
import { fetchArticleList } from '../fetchArticleList.ts/fetchArticleList'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const _inited = getArticleListInited(getState())
    if (!_inited) {
      const orderFromUrl = (searchParams.get('order') as SortOrder) || 'asc'
      const sortFromUrl =
        (searchParams.get('sort') as ArcticleSortField) || ArcticleSortField.CREATED
      const searchFromUrl = searchParams.get('search') || ''
      const typeSort = (searchParams.get('type') as ArcticleType) || ArcticleType.ALL
      dispatch(
        articlePageAction.initState({
          order: orderFromUrl,
          sort: sortFromUrl,
          search: searchFromUrl,
          type: typeSort,
        })
      )
      dispatch(fetchArticleList({}))
    }
  }
)
