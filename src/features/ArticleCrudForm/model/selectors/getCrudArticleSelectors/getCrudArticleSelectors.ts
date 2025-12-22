import { StateSchema } from '@/app/providers/StoreProvider'

export const getCrudArticleData = (state: StateSchema) => state.articleCrudForm?.data || undefined

export const getCrudArticleIsLoading = (state: StateSchema) =>
  state.articleCrudForm?.isLoading || false

export const getCrudArticleIsCreated = (state: StateSchema) =>
  state.articleCrudForm?.isCreated || false

export const getCrudArticleError = (state: StateSchema) => state.articleCrudForm?.error || ''

export const getCrudArticleCreatedArticleId = (state: StateSchema) =>
  state.articleCrudForm?.createdArticleId || ''
