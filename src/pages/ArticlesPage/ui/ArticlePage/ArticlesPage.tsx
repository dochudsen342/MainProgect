import { memo, useCallback, useEffect } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { getArticleListHasMore, getArticleListIsLoading, getArticleListPage, getArticleListView } from '../../model/selectors/getArticlePageSelectors/getArticlePageSelectors'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleList } from '../../model/service/fetchArticleList.ts/fetchArticleList'
import { articlePageAction, articlePageReducer, getArticleList } from '../../model/slice/articlePageSlice'
import cl from './ArticlePage.module.scss'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { fetchNextArticlesPart } from 'pages/ArticlesPage/model/service/fetchNextArticlesParts/fetchNextArticlesPart'
import ArticlesFillterPage from '../ArticlesFillterPage/ArticlesFillterPage'

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
  
  
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPart())
  },[dispatch])

  useEffect(() => {
    dispatch(articlePageAction.initState())
    dispatch(fetchArticleList({
      page:1,
    }))
  }, [])
  
  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount = {false}>
      <PageWrapper onScrollEnd={onLoadNextPart} className={classNames(cl.ArticlePage, {}, [className])}>
        <ArticlesFillterPage/>
        <ArticleList  className={cl.list} isLoading={isLoading} view={view} articles={articles} />
      </PageWrapper>
    </DynamicReducerLoader>
  )
}

export default memo(ArticlePage)



