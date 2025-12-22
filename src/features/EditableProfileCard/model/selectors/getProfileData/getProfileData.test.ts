import { StateSchema } from '@/app/providers/StoreProvider'
import { Profile } from '@/entities/Profile'
import { DeepPartial } from '@/shared/lib/CustomTypes/DeepPartial'
import { getProfileData } from './getProfileData'

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
