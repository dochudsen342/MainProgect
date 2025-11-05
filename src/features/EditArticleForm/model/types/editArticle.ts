import { Article } from 'entities/Article'

export interface EditableArticleSchema {
  isLoading: boolean
  data?: Article
  error?: string
}
