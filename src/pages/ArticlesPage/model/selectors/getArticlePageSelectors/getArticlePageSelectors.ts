import { StateSchema } from '@/app/providers/StoreProvider'
import { ArcticleSortField, ArticleView } from '@/entities/Article'
import { ArcticleType } from '@/entities/Article/model/types/article'

export const getArticleListView = (state: StateSchema) =>
  state?.articlePage?.view || ArticleView.SMALL
export const getArticleListIsLoading = (state: StateSchema) =>
  state?.articlePage?.isLoading || false
export const getArticleListPage = (state: StateSchema) => state?.articlePage?.page || 1
export const getArticleListLimit = (state: StateSchema) => state?.articlePage?.limit || 4
export const getArticleListHasMore = (state: StateSchema) => state?.articlePage?.hasMore
export const getArticleListInited = (state: StateSchema) => state?.articlePage?._inited
export const getArticleListOrder = (state: StateSchema) => state?.articlePage?.order || 'asc'
export const getArticleListSort = (state: StateSchema) =>
  state?.articlePage?.sort || ArcticleSortField.CREATED
export const getArticleListSearch = (state: StateSchema) => state?.articlePage?.search || ''
export const getArticleListTypeValue = (state: StateSchema) =>
  state?.articlePage?.typeValue || ArcticleType.ALL
