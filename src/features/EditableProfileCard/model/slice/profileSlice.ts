import { Profile } from '@/entities/Profile/model/types/profile'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../service/fetchDataProfile/fetchProfileData'
import { updateProfileData } from '../service/updateProfileData/uptadeProfileData'
import { ProfileSchema } from '../types/editableProfileCardSchema'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: '',
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, actions: PayloadAction<boolean>) => {
      state.readonly = actions.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
      state.validateErrors = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
        state.data = actions.payload
        state.form = actions.payload
        state.isLoading = false
      })
      .addCase(fetchProfileData.rejected, (state, actions) => {
        state.error = actions.payload
        state.isLoading = false
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true
        state.validateErrors = undefined
      })
      .addCase(updateProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
        state.data = actions.payload
        state.form = actions.payload
        state.isLoading = false
        state.readonly = true
        state.validateErrors = undefined
      })
      .addCase(updateProfileData.rejected, (state, actions) => {
        state.validateErrors = actions.payload
        state.readonly = false
        state.isLoading = false
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
