import { StateSchema } from '@/app/providers/StoreProvider'
import { useSelector } from 'react-redux'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state?.articleDetailsPage?.commments?.isLoading || false
