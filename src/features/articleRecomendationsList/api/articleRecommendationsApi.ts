import { rtkApi } from '@/shared/api/rtkApi'

const recomendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticlesRecomendationList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
})

export const useArticleRecomendationList = recomendationsApi.useGetArticlesRecomendationListQuery
