import { EntityState } from '@reduxjs/toolkit'
import { Article } from '@/entities/Article'

export interface ArticleDetailsPageRecomendationsSchema extends EntityState<Article, any> {
  isLoading?: boolean
  error?: string
}
