import { StateSchema } from '@/app/providers/StoreProvider'

export const getProfileRatingData = (state: StateSchema) => state.profileRating?.rate

export const getProfileRatingIsLoading = (state: StateSchema) =>
  state.profileRating?.isLoading || false
