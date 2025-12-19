import React, { useCallback } from 'react'
import cl from './ArticleRating.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { RatingCard } from '@/entities/Rating'
import { useTranslation } from 'react-i18next'
import { useArticleRatings, useMutationArticleRatings } from '../../api/articleRatingApi'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData } from '@/entities/User'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import { fetchUpdateArticleRating } from '../../model/service/updateArticleRating'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'

interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()
  const userData = useSelector(getAuthData)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useArticleRatings({
    userId: userData?.id ?? '',
    articleId: articleId,
  })

  const handleRateArticle = (starsCount: number, feedback?: string) => {
    dispatch(
      fetchUpdateArticleRating({
        articleId,
        rate: starsCount,
        userId: userData?.id ?? '',
        feedback,
      })
    )
  }

  const onAcceptHandler = (starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }

  const onCancelHandler = (starsCount: number) => {
    handleRateArticle(starsCount)
  }
  const rating = data?.[0]

  if (isLoading) {
    return <Skeleton height={120} width='100%' />
  }
  return (
    <div className={classNames(cl.ArticleRating, {}, [className])}>
      <RatingCard
        onCancel={onCancelHandler}
        onAccept={onAcceptHandler}
        rate={rating?.rate}
        title={t('Оцените статью')}
        feedbackTitle={t('Оставьте свой отзыв о статье,это поможет улучьшить качетсво!')}
        hasFeedback
      />
    </div>
  )
}

export default ArticleRating
