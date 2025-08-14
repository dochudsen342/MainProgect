import React, { memo } from 'react'
import cl from './ArticlePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ArticlePageProps {
  className?: string,
}

const ArticlePage = ({className}:ArticlePageProps) => {
 
  return (
    <div className={classNames(cl.ArticlePage, {}, [className])}>
        ARTICLES PAGE
    </div>
  )
}

export default memo(ArticlePage)