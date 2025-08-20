import { memo, useCallback, useEffect } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { getArticleListIsLoading, getArticleListView } from '../../model/selectors/getArticlePageSelectors/getArticlePageSelectors'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleList } from '../../model/service/fetchArticleList.ts/fetchArticleList'
import { articlePageAction, articlePageReducer, getArticleList } from '../../model/slice/articlePageSlice'
import cl from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string,
}
const reducers:ReducerList = {
  articlePage:articlePageReducer
}
const ArticlePage = ({ className }: ArticlePageProps) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticleList.selectAll)
  const view = useSelector(getArticleListView)
  const isLoading = useSelector(getArticleListIsLoading)

  const onChangeView = useCallback((view:ArticleView) =>{
    dispatch(articlePageAction.setView(view))
  },[dispatch])

  useEffect(() => {
    dispatch(fetchArticleList())
    dispatch(articlePageAction.initState())
  }, [])
  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount = {true}>
      <div className={classNames(cl.ArticlePage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicReducerLoader>
  )
}

export default memo(ArticlePage)



