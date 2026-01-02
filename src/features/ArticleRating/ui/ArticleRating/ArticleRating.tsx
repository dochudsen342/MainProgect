import { RatingCard } from '@/entities/Rating'
import { getAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Skeleton } from '@/shared/ui/Skeleton'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useArticleRatings } from '../../api/articleRatingApi'
import { fetchUpdateArticleRating } from '../../model/service/updateArticleRating'
import cl from './ArticleRating.module.scss'

interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()
  const userData = useSelector(getAuthData)
  const dispatch = useAppDispatch()
  const { data, isLoading } = useArticleRatings({
    userId: userData?.id ?? '',
    articleId: articleId,
  })

  console.log(data)
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
})

export default ArticleRating
