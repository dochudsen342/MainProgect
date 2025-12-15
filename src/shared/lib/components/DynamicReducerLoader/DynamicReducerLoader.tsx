import { FC, ReactNode, useEffect } from 'react'
import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWidhtManager } from 'app/providers/StoreProvider'
import { StateSchema, StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicReducerLoaderProps {
  reducers: ReducerList
  children: ReactNode
  removeAfterUnmount?: boolean
}

const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  reducers,
  children,
  removeAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreWidhtManager
  console.log(store)
  const dispatch = useDispatch()
  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([nameReducer, reducer]) => {
      const mounted = mountedReducers[nameReducer as StateSchemaKey]
      if (!mounted) {
        store.reducerManager.add(nameReducer as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${nameReducer} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([nameReducer]) => {
          store.reducerManager.remove(nameReducer as StateSchemaKey)
          dispatch({ type: `@DESTROY ${nameReducer} reducer` })
        })
      }
    }
  }, [])

  return <>{children}</>
}

export default DynamicReducerLoader
