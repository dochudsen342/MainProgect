import React from 'react'
import cl from './ArticleCreatePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { CreateArticleForm } from 'features/CreateArticleForm'

interface ArticleCreatePageProps {
  className?: string,
}

const ArticleCreatePage = ({className}:ArticleCreatePageProps) => {
 
  return (
    <div className={classNames(cl.ArticleCreatePage, {}, [className])}>
      <CreateArticleForm/>
    </div>
  )
}

export default ArticleCreatePage