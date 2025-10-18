import React from 'react'
import { ArticleList } from 'entities/Article'
import { useSelector } from 'react-redux'
import { getArticleList } from '../../model/slice/articlePageSlice'
import {
  getArticleListIsLoading,
  getArticleListView,
} from '../../model/selectors/getArticlePageSelectors/getArticlePageSelectors'

interface ArticleInfiniteListProps {
  className?: string
}

const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
  const articles = useSelector(getArticleList.selectAll)
  const view = useSelector(getArticleListView)
  const isLoading = useSelector(getArticleListIsLoading)

  return <ArticleList isLoading={isLoading} view={view} articles={articles} />
}

export default ArticleInfiniteList
