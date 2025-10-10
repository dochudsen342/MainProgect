import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { StateSchema, ThunkExtraArg } from './stateSchema'
import { scrollRestorationReducer } from 'features/ScrollRestoration'
import { rtkApi } from 'shared/api/rtkApi'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    scrollRestoration: scrollRestorationReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducers)
  const extraArg: ThunkExtraArg = {
    api: $api,
  }
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  })
  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
