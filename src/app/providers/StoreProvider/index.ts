import type { ReduxStoreWidhtManager, StateSchema, ThunkConfig } from './config/stateSchema'
import type { AppDispatch } from './config/store'
import { createReduxStore } from './config/store'
import StoreProvider from './ui/StoreProvider'

export {
  AppDispatch,
  createReduxStore,
  ReduxStoreWidhtManager,
  StateSchema,
  StoreProvider,
  ThunkConfig,
}
