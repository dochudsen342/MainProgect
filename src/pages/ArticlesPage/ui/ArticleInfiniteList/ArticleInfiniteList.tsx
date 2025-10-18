import React from 'react'
import { ArticleList } from 'entities/Article'
import { useSelector } from 'react-redux'
import { getArticleList } from '../../model/slice/articlePageSlice'
import {
  getArticleListIsLoading,
  getArticleListView,
} from '../../model/selectors/getArticlePageSelectors/getArticlePageSelectors'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

interface ArticleInfiniteListProps {
  className?: string
}

const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
  const articles = useSelector(getArticleList.selectAll)
  const view = useSelector(getArticleListView)
  const isLoading = useSelector(getArticleListIsLoading)
  const dispatch = useAppDispatch()

  return <ArticleList isLoading={isLoading} view={view} articles={articles} />
}

export default ArticleInfiniteList
