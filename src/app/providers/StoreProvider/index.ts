import StoreProvider from './ui/StoreProvider'
import { createReduxStore } from './config/store'
import type { StateSchema, ReduxStoreWidhtManager, ThunkConfig } from './config/stateSchema'
import type { AppDispatch } from './config/store'

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWidhtManager,
  AppDispatch,
  ThunkConfig,
}
