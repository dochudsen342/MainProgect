import { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import ArticleItem from '../ArticleItem/ArticleItem'
import ArticleItemSkeleton from '../ArticleItem/ArticleItemSkeleton'
import cl from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string,
  articles?:Article[],
  isLoading?:boolean,
  view?:ArticleView, 
}

const ArticleList = ({className,articles,isLoading,view}:ArticleListProps) => {


 const renderArticle = useCallback((article:Article) =>{
    return <ArticleItem key={article.id} className={cl.card} article={article} view={view} />
 },[articles,view])
 
 const renderSkeleton = useCallback(() =>{
   const skeletonList =  new Array(view === ArticleView.BIG ? 3 : 12).fill(0).map((item,index) => (<ArticleItemSkeleton className={cl.card} view={view} key={index}/>))
   return skeletonList
 },[view])
  
  
  return (
    <div className={classNames(cl.ArticleList, {}, [className,cl[view]])}>
        {articles.length > 0 ? articles.map(renderArticle):null}
        {isLoading && renderSkeleton() }
    </div>
  )
}

export default ArticleList