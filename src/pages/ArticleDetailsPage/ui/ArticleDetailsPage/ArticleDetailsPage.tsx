import React, { memo, useEffect } from 'react'
import cl from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Text from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { articleCommentListReducer, getArticleComments } from 'features/ArticleCommentList/model/slice/ArticleCommentListSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCommentsByArticleId } from 'features/ArticleCommentList'
import { getArticleCommentsIsLoading } from 'features/ArticleCommentList/model/selectors/getArticleCommentsSelectors/ArticleCommentsSelectors'

interface ArticleDetailsPageProps {
  className?: string,
}

const reducerList:ReducerList = {
  articleDetailsComment:articleCommentListReducer 
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const commentList = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useDispatch()
  useEffect(() =>{
    //@ts-ignore
    dispatch(fetchCommentsByArticleId(id))
  },[])
  if (!id) {
    return <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      {t('Такой статьи нет!')}
    </div>
  }

  return (
    <DynamicReducerLoader removeAfterUnmount= {true} reducers={reducerList}>
      <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={'Комментарии'} />
        <CommentList isLoading = {isLoading} comments={commentList} />
      </div>
    </DynamicReducerLoader>

  )
}

export default memo(ArticleDetailsPage)