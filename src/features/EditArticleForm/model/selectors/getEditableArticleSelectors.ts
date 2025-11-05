import { StateSchema } from 'app/providers/StoreProvider'

export const getEditableArticleData = (state: StateSchema) =>
  state.articleEditPage?.data || undefined

export const getEditableArticleIsLoading = (state: StateSchema) =>
  state.articleEditPage?.isLoading || false
