import { DeepPartial } from '@/shared/lib/CustomTypes/DeepPartial'
import { combineReducers, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit'
import { StateSchema } from '..'
import { ReducerManager, StateSchemaKey } from './stateSchema'

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)
  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: DeepPartial<StateSchema>, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (let key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state as any, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    },
  }
}
