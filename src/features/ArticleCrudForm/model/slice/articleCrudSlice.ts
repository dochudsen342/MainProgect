import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ArcticleType,
  Article,
  ArticleBlock,
  ArticleBlockType,
} from 'entities/Article/model/types/article'
import { ArticleCrudShema } from '../types/articleCrudSchema'
import { fetchArticleById } from 'entities/Article'
import { fetchCreateArticle } from '../service/fetchCreateArticle/fetchCreateArticle'
import { fetchUpdateArticle } from '../service/fetchUpdateArticle/fetchUpdateArticle'

const initialState: ArticleCrudShema = {
  data: {
    title: '',
    subtitle: '',
    img: '',
    createdDate: '',
    views: 0,
    user: { id: '', username: '' },
    type: [],
    blocks: [],
  },
  isLoading: false,
  error: '',
  isCreated: false,
  createdArticleId: '',
}

const articleCrudFormSlice = createSlice({
  name: 'createArticleForm',
  initialState,
  reducers: {
    setTitleArticle: (state, action: PayloadAction<string>) => {
      state.data.title = action.payload
    },
    setSubtitleArticle: (state, action: PayloadAction<string>) => {
      state.data.subtitle = action.payload
    },
    setArticleImgLink: (state, action: PayloadAction<string>) => {
      state.data.img = action.payload
    },
    setArticleType: (state, action: PayloadAction<ArcticleType>) => {
      state.data.type.push(action.payload)
    },
    deleteArticleType: (state, action: PayloadAction<ArcticleType>) => {
      const currentTypeIndex = state.data.type.findIndex(
        (type: ArcticleType) => type === action.payload
      )
      state.data.type.splice(currentTypeIndex, 1)
    },
    addBlock: (state, action: PayloadAction<ArticleBlock>) => {
      state.data.blocks.push(action.payload)
    },
    updateBlockTitle: (state, action: PayloadAction<{ id: string; newTitle: string }>) => {
      const block = state.data?.blocks.find((block) => block.id === action.payload.id)
      if (block) {
        block.title = action.payload.newTitle
      }
    },
    updateBlockContent: (state, action: PayloadAction<{ id: string; content: string }>) => {
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
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchCreateArticle.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchCreateArticle.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchCreateArticle.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isCreated = true
        state.createdArticleId = action.payload.id
        state.isLoading = false
      })
      .addCase(fetchUpdateArticle.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchUpdateArticle.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(fetchUpdateArticle.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isCreated = true
        state.isLoading = false
      })
  },
})

export const { reducer: articleCrudFormReducer } = articleCrudFormSlice
export const { actions: articleCrudFormAction } = articleCrudFormSlice
