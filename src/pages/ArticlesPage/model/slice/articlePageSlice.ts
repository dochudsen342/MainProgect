import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { fetchArticleList } from '../service/fetchArticleList.ts/fetchArticleList'
import { ArticlePageSchema } from '../types/articlePageSchema'
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { ArcticleSortField, ArcticleType, SearchArticlesParams } from 'entities/Article/model/types/article'
import { SortOrder } from 'shared/types'


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
    page:1,
    hasMore:true,
    _inited:false,
    sort:ArcticleSortField.CREATED,
    order:'asc',
    search:'',
    typeValue:ArcticleType.ALL,
  }),
  reducers: {
    setView:(state,action:PayloadAction<ArticleView>) =>{
      state.view = action.payload
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY,action.payload)
    },
    setPage:(state,action:PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder:(state,action:PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort:(state,action:PayloadAction<ArcticleSortField>) => {
      state.sort = action.payload
    },
    setSearch:(state,action:PayloadAction<string>) => {
      state.search = action.payload
    },
    setTabs:(state,action:PayloadAction<ArcticleType>) =>{
      state.typeValue = action.payload
    },
    initState:(state,action:PayloadAction<SearchArticlesParams>) =>{
      const view =  localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view,
      state.limit = view === ArticleView.BIG ? 3 : 9
      state._inited = true
      state.order = action.payload.order
      state.search = action.payload.search
      state.sort = action.payload.sort
      state.typeValue = action.payload.type
    }
  },
  extraReducers:(builder) =>{
          builder.addCase(fetchArticleList.pending,(state,action) =>{
              state.isLoading = true
              state.error = undefined

              if(action.meta.arg.replace){
                articlesAdapter.removeAll(state)
              }
          }).
          addCase(fetchArticleList.fulfilled, (state,action) =>{
            state.isLoading = false
            state.hasMore = state.limit === action.payload.length
            if(action.meta.arg.replace){
              articlesAdapter.setAll(state,action.payload)
            }else{
              articlesAdapter.addMany(state,action.payload)
            }
          }).
          addCase(fetchArticleList.rejected,(state,actions) =>{
              state.error = actions.payload
              state.isLoading = false
          })
      }
})

export const {reducer:articlePageReducer} = articlePageSlice
export const {actions:articlePageAction} = articlePageSlice