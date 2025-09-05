import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { ArcticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

export interface ArticlePageSchema extends EntityState<Article,string>{
    isLoading?:boolean,
    error?:string,
    view:ArticleView,
    //pagination
    page:number,
    limit?:number,
    hasMore:boolean
    order:SortOrder,
    sort:ArcticleSortField,
    search:string
}