import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Article'
import { useSelector } from 'react-redux'
import { getArticleList } from '../../model/slice/articlePageSlice'
import {
  getArticleListIsLoading,
  getArticleListView,
} from '../../model/selectors/getArticlePageSelectors/getArticlePageSelectors'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { initArticlesPage } from '../../model/service/initArticlesPage/initArticlesPage'

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
