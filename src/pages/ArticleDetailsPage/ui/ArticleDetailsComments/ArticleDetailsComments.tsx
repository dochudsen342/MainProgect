import React, { useCallback, useEffect } from 'react'
import Text from '@/shared/ui/Text/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle'
import { useSelector } from 'react-redux'
import { getArticleComments } from '@/features/ArticleCommentList/model/slice/ArticleCommentListSlice'
import { fetchCommentsByArticleId, getArticleCommentsIsLoading } from '@/features/ArticleCommentList'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsCommentsProps {
  className?: string
  articleId?: string
}

const ArticleDetailsComments = ({ className, articleId }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation()
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
      <Text marginTop='16' title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={isLoading} comments={commentList} />
    </>
  )
}

export default ArticleDetailsComments
