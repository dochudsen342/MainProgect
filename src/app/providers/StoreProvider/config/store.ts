import { configureStore, PayloadAction, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
import { StateSchema } from "./stateSchema";




export function createReduxStore(initialState?:StateSchema){

    const rootReducers:ReducersMapObject<StateSchema> = {
        counter:counterReducer,
        user:userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
    reducer:reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState:initialState,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        thunk:{
            extraArgument:{
                api:$api
            }
        }
    })
}) 
    //@ts-ignore
    store.reducerManager = reducerManager
    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

