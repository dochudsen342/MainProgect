import { Profile } from '@/entities/Profile'
import { ProfileValidateError } from '../../types/editableProfileCardSchema'

export const validateProfileData = (profile: Profile) => {
  if (!profile) {
    return [ProfileValidateError.NO_DATA]
  }

  const { age, country, firstname, lastname } = profile
  const errors: ProfileValidateError[] = []

  if (!firstname || !lastname) {
    errors.push(ProfileValidateError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ProfileValidateError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ProfileValidateError.INCORRECT_COUNTRY)
  }

  return errors
}
