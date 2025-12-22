import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/stateSchema'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { DeepPartial } from '@/shared/lib/CustomTypes/DeepPartial'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: StateSchema
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
