import { ArcticleType, Article, ArticleBlock } from 'entities/Article/model/types/article'

export interface CreateArticleForm extends Omit<Article, 'user' | 'id'> {
  userId: string
  id?: string
}

export interface CreacteArticleFormSchema {
  data: CreateArticleForm
  isLoading: boolean
  error: string
  isCreated: boolean
  createdArticleId: string
}
