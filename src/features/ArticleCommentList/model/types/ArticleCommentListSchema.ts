import { EntityState } from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'

export interface ArticlCommentListSchema extends EntityState<Comment, any> {
  isLoading?: boolean
  error?: string
}
