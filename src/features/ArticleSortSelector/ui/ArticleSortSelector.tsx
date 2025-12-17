import React, { useMemo } from 'react'
import cl from './ArticleSortSelector.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import Select, { SelectOptions } from '@/shared/ui/Select/Select'
import { ArcticleSortField } from '@/entities/Article/model/types/article'
import { SortOrder } from '@/shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArcticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder | string) => void
  onChangeSort: (newSort: ArcticleSortField | string) => void
}

const ArticleSortSelector = ({
  className,
  onChangeOrder,
  onChangeSort,
  order,
  sort,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation()
  const orderOptionsList = useMemo<SelectOptions[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t]
  )

  const sortOptionsList = useMemo<SelectOptions[]>(
    () => [
      {
        value: ArcticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArcticleSortField.TITLE,
        content: t('заголовкам'),
      },
      {
        value: ArcticleSortField.VIEWS,
        content: t('количеству просмотров'),
      },
    ],
    [t]
  )

  return (
    <div className={classNames(cl.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortOptionsList}
        label={t('Сортировать по')}
      />
      <Select value={order} onChange={onChangeOrder} options={orderOptionsList} label={t('По')} />
    </div>
  )
}

export default ArticleSortSelector
