import React, { memo } from 'react'
import cl from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
  className?: string,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const {t} = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      {t('Такой статьи нет!')}
    </div>
  }

  return (
    <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)