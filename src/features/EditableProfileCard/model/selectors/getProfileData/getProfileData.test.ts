import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getProfileData } from './getProfileData'
import { Profile } from 'entities/Profile'

describe('getLoginError.test', () => {
  const profileData: Profile = {
    id: '1',
    age: 23,
    city: 'Volgograd',
    firstname: 'Dima',
    username: 'Dqizi',
  }
  test('should return profileData', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: profileData, isLoading: true, readonly: false },
    }
    expect(getProfileData(state as StateSchema)).toEqual(profileData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
