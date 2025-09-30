import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateArticleForm } from '../types/createArticleForm'
import { ArcticleType } from 'entities/Article/model/types/article'

const initialState: CreateArticleForm = {
  type: [],
  titleArticle: '',
  subtitleArticle: '',
  articleImgLink: '',
  block: [],
}

const createArticleFormSlice = createSlice({
  name: 'createArticleForm',
  initialState,
  reducers: {
    setTitleArticle: (state, action: PayloadAction<string>) => {
      state.titleArticle = action.payload
    },
    setSubtitleArticle: (state, action: PayloadAction<string>) => {
      state.subtitleArticle = action.payload
    },
    setArticleImgLink: (state, action: PayloadAction<string>) => {
      state.articleImgLink = action.payload
    },
    setArticleType: (state, action: PayloadAction<ArcticleType>) => {
      state.type.push(action.payload)
    },
    deleteArticleType: (state, action: PayloadAction<ArcticleType>) => {
      const currentTypeIndex = state.type.findIndex((type: ArcticleType) => type === action.payload)
      state.type.splice(currentTypeIndex, 1)
    },
  },
})

export const { reducer: createArticleFormReducer } = createArticleFormSlice
export const { actions: createArticleFormAction } = createArticleFormSlice
