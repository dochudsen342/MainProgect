import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getLoginIsLoading } from './getLoginIsLodaing'

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
        password: '',
        username: '',
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
