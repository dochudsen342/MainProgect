import { userReducer } from '@/entities/User'
import { profileRatingReducer } from '@/features/ProfileRating/model/slice/profileRatingSlice'
import { scrollRestorationReducer } from '@/features/ScrollRestoration'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { createReducerManager } from './reducerManager'
import { StateSchema, ThunkExtraArg } from './stateSchema'

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    scrollRestoration: scrollRestorationReducer,
    profileRating: profileRatingReducer,
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
