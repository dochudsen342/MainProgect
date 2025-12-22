import { rtkApi } from '@/shared/api/rtkApi'
import { Rating } from '../model/types/types'

interface MutationArticleRating {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

const articleRatingsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesRatings: build.query<Rating[], { userId: string; articleId: string }>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, MutationArticleRating>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: {
          articleId: arg.articleId,
          userId: arg.userId,
          rate: arg.rate,
          feedback: arg.feedback,
        },
      }),
    }),
  }),
})

export const useArticleRatings = articleRatingsApi.useGetArticlesRatingsQuery
export const useMutationArticleRatings = articleRatingsApi.useRateArticleMutation
