import { articleCommentListReducer } from '@/features/ArticleCommentList'
import { combineReducers } from '@reduxjs/toolkit'
import { ArticlesDetailsPageSchema } from '../types'
import { articleDetailsPageRecomentionsReducer } from './articleDetailsPageRecomentionsSlice'

export const articleDetailsPageReducers = combineReducers<ArticlesDetailsPageSchema>({
  recomendations: articleDetailsPageRecomentionsReducer as any,
  commments: articleCommentListReducer as any,
})
