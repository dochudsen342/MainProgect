import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/lib/CustomTypes/DeepPartial'
import { getProfileReadonly } from './getProfileReadonly'

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
        isLoading: false,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })
})
