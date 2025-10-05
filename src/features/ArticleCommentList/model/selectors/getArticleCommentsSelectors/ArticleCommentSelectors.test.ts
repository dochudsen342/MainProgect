import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getArticleCommentsIsLoading } from './ArticleCommentsSelectors'

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        commments: {
          isLoading: true,
        },
      },
    }
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(false)
  })
})
