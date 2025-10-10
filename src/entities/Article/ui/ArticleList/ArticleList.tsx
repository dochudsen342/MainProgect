import { HTMLAttributeAnchorTarget, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArcticleSortField, Article, ArticleView } from '../../model/types/article'
import ArticleItem from '../ArticleItem/ArticleItem'
import ArticleItemSkeleton from '../ArticleItem/ArticleItemSkeleton'
import cl from './ArticleList.module.scss'
import { SortOrder } from 'shared/types'
import Text, { TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticleListProps {
  className?: string
  articles?: Article[]
  isLoading?: boolean
  view?: ArticleView
  sort?: ArcticleSortField
  order?: SortOrder
  search?: string
  target?: HTMLAttributeAnchorTarget
}

const ArticleList = ({ className, articles, isLoading, view, target }: ArticleListProps) => {
  const { t } = useTranslation()
  const renderArticle = useCallback(
    (article: Article) => {
      return (
        <ArticleItem
          target={target}
          key={article.id}
          className={cl.card}
          article={article}
          view={view}
        />
      )
    },
    [articles, view]
  )

  const renderSkeleton = useCallback(() => {
    const skeletonList = new Array(view === ArticleView.BIG ? 3 : 12)
      .fill(0)
      .map((item, index) => <ArticleItemSkeleton className={cl.card} view={view} key={index} />)
    return skeletonList
  }, [view])

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cl.ArticleList, {}, [className, cl[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div className={classNames(cl.ArticleList, {}, [className, cl[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && renderSkeleton()}
    </div>
  )
}

export default ArticleList
