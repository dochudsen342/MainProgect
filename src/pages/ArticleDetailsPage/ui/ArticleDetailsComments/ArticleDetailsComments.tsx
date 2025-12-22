import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/AddCommentForm'
import {
  fetchCommentsByArticleId,
  getArticleCommentsIsLoading,
} from '@/features/ArticleCommentList'
import { getArticleComments } from '@/features/ArticleCommentList/model/slice/ArticleCommentListSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Text } from '@/shared/ui/Text'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle'

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
