import React, { useCallback, useEffect } from 'react'
import cl from './ArticleDetailsComments.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/AddCommentForm'
import { CommentList } from 'entities/Comment'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle'
import { useSelector } from 'react-redux'
import { getArticleComments } from 'features/ArticleCommentList/model/slice/ArticleCommentListSlice'
import { fetchCommentsByArticleId, getArticleCommentsIsLoading } from 'features/ArticleCommentList'

interface ArticleDetailsCommentsProps {
  className?: string
  articleId?: string
}

const ArticleDetailsComments = ({ className, articleId }: ArticleDetailsCommentsProps) => {
  const commentList = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId))
  }, [])

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )
  return (
    <>
      <Text title={'Комментарии'} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoading} comments={commentList} />
    </>
  )
}

export default ArticleDetailsComments
