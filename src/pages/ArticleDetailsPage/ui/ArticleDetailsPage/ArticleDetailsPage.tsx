import { memo, useCallback, useEffect } from 'react'
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddCommentForm'
import { fetchCommentsByArticleId } from 'features/ArticleCommentList'
import { getArticleCommentsIsLoading } from 'features/ArticleCommentList/model/selectors/getArticleCommentsSelectors/ArticleCommentsSelectors'
import { articleCommentListReducer, getArticleComments } from 'features/ArticleCommentList/model/slice/ArticleCommentListSlice'
import { addCommentForArticle } from '../../model/service/addCommentForArticle/addCommentForArticle'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import DynamicReducerLoader, { ReducerList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import Text, { TextSize } from 'shared/ui/Text/Text'
import cl from './ArticleDetailsPage.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { getArticleRecomendation } from '../../model/slices/articleDetailsPageRecomentionsSlice'
import { getArticleDetailsPageRecomendationError, getArticleDetailsPageRecomendationIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recomendations'
import { fetchArticleRecomendations } from '../../model/service/fetchArticleRecomendations/fetchArticleRecomendations'
import { articleDetailsPageReducers } from 'pages/ArticleDetailsPage/model/slices'


 interface ArticleDetailsPageProps {
  className?: string,
}

const reducerList:ReducerList = {
  articleDetailsPage:articleDetailsPageReducers,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const commentList = useSelector(getArticleComments.selectAll)
  const recomendations = useSelector(getArticleRecomendation.selectAll)
  const recomendationsIsLoading = useSelector(getArticleDetailsPageRecomendationIsLoading)
  const recomendationsError = useSelector(getArticleDetailsPageRecomendationError)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSendComment = useCallback((text:string) =>{
    dispatch(addCommentForArticle(text))
  },[dispatch])
  const onBackToList = useCallback(() =>{
    navigate(RoutePath.articles)
  },[])
  useEffect(() =>{
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecomendations())
  },[])

  if (!id) {
    return <PageWrapper className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      {t('Такой статьи нет!')}
    </PageWrapper>
  }

  return (
    <DynamicReducerLoader removeAfterUnmount= {true} reducers={reducerList}>
      <PageWrapper className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <Button onClick = {onBackToList} theme={ThemeButton.OUTLINE}>{t('Назад к списку')}</Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={('Рекомендуем')}/>
        <ArticleList target='_blank' className={cl.articleRecomendList} view={ArticleView.SMALL} articles={recomendations} isLoading={recomendationsIsLoading}/>
        <Text title={'Комментарии'} />
        <AddCommentForm onSendComment={onSendComment}/>
        <CommentList isLoading = {isLoading} comments={commentList} />
      </PageWrapper>
    </DynamicReducerLoader>

  )
}

export default memo(ArticleDetailsPage)