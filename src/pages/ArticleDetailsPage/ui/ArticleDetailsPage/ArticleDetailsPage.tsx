import React, { memo } from 'react'
import cl from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticleDetailsPageProps {
  className?: string,
}

const ArticleDetailsPage = ({className}:ArticleDetailsPageProps) => {
 
  return (
    <div className={classNames(cl.ArticleDetailsPage, {}, [className])}>
      ARTICLE DETAILS PAGE
    </div>
  )
}

export default memo(ArticleDetailsPage)