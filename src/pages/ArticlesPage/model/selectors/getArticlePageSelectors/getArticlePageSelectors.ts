import { StateSchema } from "app/providers/StoreProvider";


export const getArticleListView = (state:StateSchema) => state?.articlePage?.view
export const getArticleListIsLoading = (state:StateSchema) => state?.articlePage?.isLoading