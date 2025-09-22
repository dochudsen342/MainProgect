import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { ArticlesDetailsPageSchema } from "pages/ArticleDetailsPage/types";
import { articleDetailsPageRecomentionsReducer } from "./articleDetailsPageRecomentionsSlice";
import { articleCommentListReducer } from "features/ArticleCommentList/model/slice/ArticleCommentListSlice";


export const articleDetailsPageReducers = combineReducers<ArticlesDetailsPageSchema>({
    recomendations: articleDetailsPageRecomentionsReducer as any,
    commments:articleCommentListReducer as any,
})