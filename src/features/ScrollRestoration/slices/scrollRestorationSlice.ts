import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollRestorationSchema } from '../types/scrollRestoration'

const initialState: ScrollRestorationSchema = {
  scroll: {},
}

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position
    },
  },
})

export const { actions: scrollRestorationAction } = scrollRestorationSlice
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice
