import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArcticleType, ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article'
import { fetchCreateArticle } from '../service/fetchCreateArticle'
import { CreacteArticleFormSchema, CreateArticleForm } from '../types/createArticleFormSchema'

const initialState: CreacteArticleFormSchema = {
  data: {
    type: [],
    title: '',
    subtitle: '',
    img: '',
    blocks: [],
    createdDate: '',
    views: 0,
    userId: '',
  },
  isLoading: false,
  error: '',
  isCreated: false,
  createdArticleId: '',
}

const createArticleFormSlice = createSlice({
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
      const block = state.data.blocks.find((block) => block.id === action.payload.id)
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
      .addCase(fetchCreateArticle.fulfilled, (state, action: PayloadAction<CreateArticleForm>) => {
        state.isLoading = false
        state.isCreated = true
        if (action.payload.id) {
          state.createdArticleId = action.payload.id
        }
      })
      .addCase(fetchCreateArticle.rejected, (state, action) => {
        state.isLoading = false
        state.isCreated = false
      })
      .addCase(fetchCreateArticle.pending, (state, action) => {
        state.isCreated = false
        state.isLoading = true
      })
  },
})

export const { reducer: createArticleFormReducer } = createArticleFormSlice
export const { actions: createArticleFormAction } = createArticleFormSlice
