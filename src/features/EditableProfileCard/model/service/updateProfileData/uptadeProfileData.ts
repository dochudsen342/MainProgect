import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfile/validateProfileData'
import { Profile } from 'entities/Profile'
import { ProfileValidateError } from '../../types/editableProfileCardSchema'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ProfileValidateError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI
  try {
    const formData = getProfileForm(getState())
    const responce = await extra.api.put<Profile>(`/profile/${formData.id}`, formData)
    const errors = validateProfileData(formData)
    if (errors.length) {
      return rejectWithValue(errors)
    }

    return responce.data
  } catch (error) {
    return rejectWithValue([ProfileValidateError.SERVER_ERROR])
  }
})
