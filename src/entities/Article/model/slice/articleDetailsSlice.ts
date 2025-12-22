import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: '',
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  },
})

export const { actions: ArticleDetailsActions } = articleDetailsSlice
export const { reducer: ArticleDetailsReducers } = articleDetailsSlice
