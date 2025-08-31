import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "entities/Article/model/types/article";


export const getArticleListView = (state:StateSchema) => state?.articlePage?.view || ArticleView.SMALL
export const getArticleListIsLoading = (state:StateSchema) => state?.articlePage?.isLoading || false
export const getArticleListPage = (state:StateSchema) => state?.articlePage?.page || 1
export const getArticleListLimit = (state:StateSchema) => state?.articlePage.limit || 4
export const getArticleListHasMore = (state:StateSchema) => state?.articlePage?.hasMore