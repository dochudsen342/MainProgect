import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from 'entities/Article'
import {
  ArcticleType,
  Article,
  ArticleBlock,
  ArticleBlockType,
} from 'entities/Article/model/types/article'
import { EditableArticleSchema } from '../types/editArticle'

const initialState: EditableArticleSchema = {
  data: undefined,
  isLoading: false,
  error: '',
}

const editArticleFormSlice = createSlice({
  name: 'editArticleForm',
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<string>) => {
      if (state.data) state.data.title = action.payload
    },
    editSubtitle: (state, action: PayloadAction<string>) => {
      if (state.data) state.data.subtitle = action.payload
    },
    editImgLink: (state, action: PayloadAction<string>) => {
      if (state.data) state.data.img = action.payload
    },
    setArticleType: (state, action: PayloadAction<ArcticleType>) => {
      if (state.data) state.data.type.push(action.payload)
    },
    deleteArticleType: (state, action: PayloadAction<ArcticleType>) => {
      if (state.data) {
        const currentTypeIndex = state.data.type.findIndex(
          (type: ArcticleType) => type === action.payload
        )
        state.data.type.splice(currentTypeIndex, 1)
      }
    },
    updateBlockContent: (state, action: PayloadAction<{ id: string; content: string }>) => {
      if (!state.data) return

      const block = state.data.blocks.find((block) => block.id === action.payload.id)
      if (block) {
        switch (block.type) {
          case ArticleBlockType.CODE:
            block.code = action.payload.content
            break
          case ArticleBlockType.TEXT:
            block.paragraphs = [action.payload.content]
            break
          case ArticleBlockType.IMAGE:
            block.src = action.payload.content
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
  },
})

export const { reducer: editArticleFormReducer } = editArticleFormSlice
export const { actions: editArticleFormAction } = editArticleFormSlice
