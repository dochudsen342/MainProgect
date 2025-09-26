import { ArcticleType, ArticleBlock } from "entities/Article/model/types/article"


export interface CreateArticleForm {
    type:ArcticleType[],
    titleArticle:string,
    subtitleArticle:string,
    articleImgLink:string,
    block:ArticleBlock[]
}