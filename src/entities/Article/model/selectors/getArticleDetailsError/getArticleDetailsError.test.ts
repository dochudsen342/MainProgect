import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getArticleDetailsError } from './getArticleDetailsError'

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
        isLoading: false,
      },
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
