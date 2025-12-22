import { ArticleDetails } from '@/entities/Article'
import { memo } from 'react'
// prettier-ignore
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecomendationsList } from '@/features/articleRecomendationsList'
import { classNames } from '@/shared/lib/classNames/classNames'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { articleDetailsPageReducers } from '../../model/slices'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cl from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducerList: ReducerList = {
  articleDetailsPage: articleDetailsPageReducers,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <PageWrapper className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        {t('Такой статьи нет!')}
      </PageWrapper>
    )
  }

  return (
    <DynamicReducerLoader removeAfterUnmount={true} reducers={reducerList}>
      <PageWrapper className={classNames(cl.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRecomendationsList />
        <ArticleRating articleId={id} />
        <ArticleDetailsComments articleId={id} />
      </PageWrapper>
    </DynamicReducerLoader>
  )
}

export default memo(ArticleDetailsPage)
