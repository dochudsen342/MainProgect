import { Article, ArticleView } from '@/entities/Article'
import { ArcticleSortField, ArcticleType } from '@/entities/Article/model/types/article'
import { SortOrder } from '@/shared/types'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticlePageSchema extends EntityState<Article, string> {
  isLoading?: boolean
  error?: string
  view: ArticleView
  //pagination
  page: number
  limit?: number
  hasMore: boolean
  _inited: boolean
  //filter and sort
  order: SortOrder
  sort: ArcticleSortField
  search: string
  typeValue: ArcticleType
}
