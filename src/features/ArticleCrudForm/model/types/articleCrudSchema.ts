import { Article } from 'entities/Article'
import { User } from 'entities/User'

export interface ArticleCrud extends Omit<Article, 'id' | 'user'> {
  id?: string
  user?: User
}

export interface ArticleCrudShema {
  data: ArticleCrud
  isLoading: boolean
  error?: string
  isCreated?: boolean
  createdArticleId?: string
}
