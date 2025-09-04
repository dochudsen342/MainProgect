import { FC, ReactNode, useEffect } from 'react'
import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWidhtManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]


interface DynamicReducerLoaderProps {
    reducers: ReducerList,
    children: ReactNode,
    removeAfterUnmount?: boolean
}

const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({ reducers, children, removeAfterUnmount }) => {
    const store = useStore() as ReduxStoreWidhtManager
    const dispatch = useDispatch()
    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()
        
        Object.entries(reducers).forEach(([nameReducer, reducer]: ReducerListEntry) => {
            const mounted = mountedReducers[nameReducer as StateSchemaKey]
            if(!mounted){
                store.reducerManager.add(nameReducer, reducer)
                dispatch({ type: `@INIT ${nameReducer} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameReducer]: ReducerListEntry) => {
                    store.reducerManager.remove(nameReducer)
                    dispatch({ type: `@DESTROY ${nameReducer} reducer` })
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default DynamicReducerLoader