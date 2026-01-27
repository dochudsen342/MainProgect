import { ArticleList, ArticleView } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRecomendationList } from '../../api/articleRecommendationsApi'

interface ArticleRecomendationsListProps {
  className?: string
}

const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { data: articles, isLoading, isError } = useArticleRecomendationList(3)
  if (isLoading || isError) {
    return null
  }

  return (
    <VStack gap='8' className={classNames('', {}, [className])}>
      <Text size='size_L' title={t('Рекомендуем')} />
      <ArticleList
        isLoading={isLoading}
        view={ArticleView.SMALL}
        articles={articles}
        target='_blank'
      />
    </VStack>
  )
})

export default ArticleRecomendationsList
