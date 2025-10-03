import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getMounted } from './getMounted'

describe('getLoginError.test', () => {
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      user: { _mounted: false },
    }
    expect(getMounted(state as StateSchema)).toEqual(false)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getMounted(state as StateSchema)).toEqual(undefined)
  })
})
