import { memo, useCallback, useEffect } from 'react'
import { fetchNextArticlesPart } from '../../model/service/fetchNextArticlesParts/fetchNextArticlesPart'
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage'
import { useSearchParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { articlePageReducer } from '../../model/slice/articlePageSlice'
import ArticlesFillterPage from '../ArticlesFillterPage/ArticlesFillterPage'
import cl from './ArticlePage.module.scss'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'

interface ArticlePageProps {
  className?: string
}
const reducers: ReducerList = {
  articlePage: articlePageReducer,
}
const ArticlePage = ({ className }: ArticlePageProps) => {
  const dispatch = useAppDispatch()
  let [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(initArticlesPage(searchParams))
  }, [])
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPart())
  }, [dispatch])
  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <PageWrapper onScrollEnd={onLoadNextPart} className={cl.pageWrapper}>
        <ArticlesFillterPage />
        <ArticleInfiniteList className={cl.list} />
      </PageWrapper>
    </DynamicReducerLoader>
  )
}

export default memo(ArticlePage)
