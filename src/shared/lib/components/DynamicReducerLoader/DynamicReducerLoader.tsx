import React, { FC, ReactNode, useEffect } from 'react'
import cl from './DynamicReducerLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ReduxStoreWidhtManager, StateSchema } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema'
import { Reducer } from '@reduxjs/toolkit'
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
        Object.entries(reducers).forEach(([nameReducer, reducer]: ReducerListEntry) => {
            store.reducerManager.add(nameReducer, reducer)
            dispatch({ type: `@INIT ${nameReducer} reducer` })
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