import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsPageRecomendationIsLoading = (state: StateSchema) =>
  state?.articleDetailsPage?.recomendations?.isLoading || false
export const getArticleDetailsPageRecomendationError = (state: StateSchema) =>
  state?.articleDetailsPage?.recomendations?.error || ''
