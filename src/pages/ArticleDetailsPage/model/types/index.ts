import { ArticlCommentListSchema } from '@/features/ArticleCommentList'
import { ArticleDetailsPageRecomendationsSchema } from './articleDetailsPageRecomendationsSchema'

export interface ArticlesDetailsPageSchema {
  recomendations: ArticleDetailsPageRecomendationsSchema
  commments: ArticlCommentListSchema
}
