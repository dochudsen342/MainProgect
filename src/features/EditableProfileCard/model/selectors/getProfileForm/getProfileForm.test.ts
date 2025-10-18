import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getProfileForm } from './getProfileForm'
import { Profile } from 'entities/Profile'

describe('getLoginError.test', () => {
  const profileFormData: Profile = {
    id: '1',
    age: 23,
    city: 'Volgograd',
    firstname: 'Dima',
    username: 'Dqizi',
  }
  test('should return formData', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileFormData,
        readonly: false,
        isLoading: true,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(profileFormData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
