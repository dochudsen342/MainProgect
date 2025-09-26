import { User } from "entities/User"
import { SortOrder } from "shared/types"


export enum ArcticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdDate'

}

export enum ArticleView{
    BIG = 'big',
    SMALL = 'small'
}

export enum ArcticleType {
    ALL = 'ALL',
    IT = 'IT',
    TECH = 'TECH',
    SCIENCE = 'SCIENCE',
    ECONOMY = 'ECONOMY'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}


export interface SearchArticlesParams  {
    order:SortOrder,
    search:string,
    sort:ArcticleSortField,
    type:ArcticleType,
}
export interface ArticleBlockBase{
    id: string,
    type: ArticleBlockType,
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    title: string,
    type:ArticleBlockType.CODE,
    code:string,
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[],
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string,
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock


export interface Article{
    id: string,
    title: string,
    subtitle: string,
    img: string,
    user:User,
    views: number,
    createdDate: string,
    type: ArcticleType[],
    blocks: ArticleBlock[]
}