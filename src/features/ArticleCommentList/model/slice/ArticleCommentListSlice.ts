import { StateSchema } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCommentsByArticleId } from '../service/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticlCommentListSchema } from '../types/ArticleCommentListSchema'

const commentsAdapter = createEntityAdapter<Comment, string>({
  selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.commments || commentsAdapter.getInitialState()
)

const articleCommentListSlice = createSlice({
  name: 'articleCommentListSlice',
  initialState: commentsAdapter.getInitialState<ArticlCommentListSchema>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, actions: PayloadAction<Comment[]>) => {
        commentsAdapter.setAll(state, actions.payload)
        state.isLoading = false
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, actions) => {
        state.error = actions.payload
        state.isLoading = false
      })
  },
})

export const { reducer: articleCommentListReducer } = articleCommentListSlice
export const { actions: articleCommentListAction } = articleCommentListSlice
