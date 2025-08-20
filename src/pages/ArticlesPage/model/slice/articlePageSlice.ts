import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { fetchArticleList } from '../service/fetchArticleList.ts/fetchArticleList'
import { ArticlePageSchema } from '../types/articleListSchema'
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'


const articlesAdapter = createEntityAdapter<Article,string>({
  selectId: (article:Article) => article.id
})

export const getArticleList = articlesAdapter.getSelectors<StateSchema>((state) => state.articlePage || articlesAdapter.getInitialState())

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading:false,
    error:undefined,
    ids:[],
    entities:{
        
    },
    view:ArticleView.SMALL,
  }),
  reducers: {
    setView:(state,action:PayloadAction<ArticleView>) =>{
      state.view = action.payload
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY,action.payload)
    },
    initState:(state) =>{
      state.view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
    }
  },
  extraReducers:(builder) =>{
          builder.addCase(fetchArticleList.pending,(state) =>{
              state.isLoading = true
              state.error = undefined
          }).
          addCase(fetchArticleList.fulfilled, (state,action:PayloadAction<Article[]>) =>{
            articlesAdapter.setAll(state,action.payload)
            state.isLoading = false
          }).
          addCase(fetchArticleList.rejected,(state,actions) =>{
              state.error = actions.payload
              state.isLoading = false
          })
      }
})

export const {reducer:articlePageReducer} = articlePageSlice
export const {actions:articlePageAction} = articlePageSlice