import { StateSchema } from "app/providers/StoreProvider";
import { ArcticleType } from "entities/Article/model/types/article";


export const getCreateArticleType = (state:StateSchema) => state?.articleCreatePage?.type || ArcticleType.IT
export const getCreateArticleTitle = (state:StateSchema) => state?.articleCreatePage?.titleArticle || ''
export const getCreateArticleSubtitle = (state:StateSchema) => state?.articleCreatePage?.subtitleArticle || ''
export const getCreateArticleImgLink = (state:StateSchema) => state?.articleCreatePage?.articleImgLink || ''
// export const getCreateArticleError = (state:StateSchema) => state?.articleCreatePage?.error || ''
// export const getCreatorArticleIsLoading = (state:StateSchema) => state?.articleCreatePage?.isLoading || false