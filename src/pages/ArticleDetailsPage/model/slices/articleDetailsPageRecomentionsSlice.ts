import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { Article } from '@/entities/Article'
import { ArticleDetailsPageRecomendationsSchema } from '../types/articleDetailsPageRecomendationsSchema'
import { fetchArticleRecomendations } from '../service/fetchArticleRecomendations/fetchArticleRecomendations'

const recommedationAdapter = createEntityAdapter<Article, string>({
  selectId: (article: Article) => article.id,
})

export const getArticleRecomendation = recommedationAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recomendations || recommedationAdapter.getInitialState()
)

const articleDetailsPageRecomentionsSlice = createSlice({
  name: 'articleDetailsPageRecomentionsSlice',
  initialState: recommedationAdapter.getInitialState<ArticleDetailsPageRecomendationsSchema>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleRecomendations.fulfilled, (state, actions: PayloadAction<Article[]>) => {
        recommedationAdapter.setAll(state, actions.payload)
        state.isLoading = false
      })
      .addCase(fetchArticleRecomendations.rejected, (state, actions) => {
        state.error = actions.payload
        state.isLoading = false
      })
  },
})

export const { reducer: articleDetailsPageRecomentionsReducer } =
  articleDetailsPageRecomentionsSlice
export const { actions: articleDetailsPageRecomentionsAction } = articleDetailsPageRecomentionsSlice
