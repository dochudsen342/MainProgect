import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'asda',
        isLoading: false,
        password: '',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('asda')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
