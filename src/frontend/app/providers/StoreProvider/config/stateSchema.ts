import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { LoginSchema } from 'features/AuthByUsername'
import { CreateArticleForm } from 'features/CreateArticleForm/model/types/createArticleForm'
import { ScrollRestorationSchema } from 'features/ScrollRestoration/types/scrollRestoration'
import { ArticlesDetailsPageSchema } from 'pages/ArticleDetailsPage/types'
import { ArticlePageSchema } from 'pages/ArticlesPage/model/types/articlePageSchema'

export interface StateSchema {
  user: UserSchema
  scrollRestoration: ScrollRestorationSchema
  //async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsPage?: ArticlesDetailsPageSchema
  addCommentForm?: AddCommentFormSchema
  articlePage?: ArticlePageSchema
  articleCreatePage?: CreateArticleForm
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
