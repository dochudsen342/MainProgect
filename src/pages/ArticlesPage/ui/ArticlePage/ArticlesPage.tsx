import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { memo, useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchNextArticlesPart } from '../../model/service/fetchNextArticlesParts/fetchNextArticlesPart'
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage'
import { articlePageReducer } from '../../model/slice/articlePageSlice'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'
import ArticlesFillterPage from '../ArticlesFillterPage/ArticlesFillterPage'
import cl from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducerList = {
  articlePage: articlePageReducer,
}

const obj1 = {
  className: '1',
  b: 1,
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
