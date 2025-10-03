import React from 'react'
import cl from './ArticleEditPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'
import ArticleCreatePage from 'pages/ArticleCreatePage/ui/ArticleCreatePage'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  return (
    <PageWrapper className={classNames(cl.ArticleEditPage, {}, [className])}>
      {isEdit ? 'ArticleEdit' : <ArticleCreatePage />}
    </PageWrapper>
  )
}

export default ArticleEditPage
