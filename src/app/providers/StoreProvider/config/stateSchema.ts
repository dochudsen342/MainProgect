import {EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterShema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from "features/AddCommentForm";
import { ArticlCommentListSchema } from "features/ArticleCommentList";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
    counter: CounterShema,
    user:UserSchema,
    //async reducers
    loginForm?:LoginSchema,
    profile?:ProfileSchema,
    articleDetails?:ArticleDetailsSchema,
    articleDetailsComment?:ArticlCommentListSchema,
    addCommentForm?:AddCommentFormSchema,
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce:(state:StateSchema, action:any) => any,
    add:(key:StateSchemaKey, reducer:Reducer) => void ,
    remove:(key:StateSchemaKey) => void,
}


export interface ReduxStoreWidhtManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager
}

export interface ThunkExtraArg{
    api:AxiosInstance, 
}

export interface ThunkConfig<T> {
    rejectValue:T,
    extra:ThunkExtraArg,
    state:StateSchema
}


