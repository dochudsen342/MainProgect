import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/lib/CustomTypes/DeepPartial'
import { getAuthData } from './getAuthData'
import { User } from '../../types/userSchema'

describe('getLoginError.test', () => {
  const authData: User = { id: '1', username: 'Dqizi' }
  test('should return profileData', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: authData },
    }
    expect(getAuthData(state as StateSchema)).toEqual(authData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getAuthData(state as StateSchema)).toEqual(undefined)
  })
})
