import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { LoginSchema } from 'features/AuthByUsername'
import { CreacteArticleFormSchema } from 'features/CreateArticleForm/model/types/createArticleFormSchema'
import { ProfileSchema } from 'features/EditableProfileCard'
import { EditableArticleSchema } from 'features/EditArticleForm/model/types/editArticle'
import { ScrollRestorationSchema } from 'features/ScrollRestoration/types/scrollRestoration'
import { ArticlesDetailsPageSchema } from 'pages/ArticleDetailsPage/types'
import { ArticlePageSchema } from 'pages/ArticlesPage/model/types/articlePageSchema'
import { rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  //async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsPage?: ArticlesDetailsPageSchema
  addCommentForm?: AddCommentFormSchema
  articlePage?: ArticlePageSchema
  articleCreatePage?: CreacteArticleFormSchema
  articleEditPage?: EditableArticleSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: any) => any
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWidhtManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
