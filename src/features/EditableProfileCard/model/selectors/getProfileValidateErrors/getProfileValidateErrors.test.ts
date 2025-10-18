import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'shared/lib/CustomTypes/DeepPartial'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ProfileValidateError } from '../../types/editableProfileCardSchema'

describe('getLoginError.test', () => {
  const validateErrors: ProfileValidateError[] = [
    ProfileValidateError.INCORRECT_AGE,
    ProfileValidateError.INCORRECT_COUNTRY,
    ProfileValidateError.INCORRECT_USER_DATA,
  ]
  test('should return validateErrors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: validateErrors,
        error: 'error',
        isLoading: false,
        readonly: false,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
