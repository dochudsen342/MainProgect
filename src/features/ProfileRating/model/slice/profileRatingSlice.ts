import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileRating } from '../service/fetchProfileRating/fetchProfileRating'
import { ProfileRating, ProfileRatingSchema } from '../types/profileRating'

const initialState: ProfileRatingSchema = {
  rate: undefined,
  isLoading: false,
  error: undefined,
}

export const profileRatingSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileRating.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProfileRating.fulfilled, (state, actions: PayloadAction<ProfileRating>) => {
        state.isLoading = false
        state.rate = actions.payload
      })
      .addCase(fetchProfileRating.rejected, (state, actions) => {
        state.isLoading = false
        state.error = actions.payload
      })
  },
})

export const { actions: profileRatingAction } = profileRatingSlice

export const { reducer: profileRatingReducer } = profileRatingSlice
