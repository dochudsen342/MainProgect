import React from 'react'
import cl from './ArticleEditPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import PageWrapper from '@/shared/ui/PageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { articleCrudFormReducer, getCrudArticleIsCreated } from '@/features/ArticleCrudForm'
import { useSelector } from 'react-redux'
import ArticleEditForm from '@/features/ArticleCrudForm/ui/ArticleEditForm/ArticleEditForm'

interface ArticleEditPageProps {
  className?: string
}
const reducerList: ReducerList = {
  articleCrudForm: articleCrudFormReducer,
}
const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>()
  const isCreate = useSelector(getCrudArticleIsCreated)
  if (!id) {
    return null
  }
  const isEdit = Boolean(id)

  return (
    <DynamicReducerLoader reducers={reducerList} removeAfterUnmount={true}>
      {!isCreate ? (
        <PageWrapper className={classNames(cl.ArticleEditPage, {}, [className])}>
          {isEdit ? <ArticleEditForm articleId={id} /> : 'Not found'}
        </PageWrapper>
      ) : (
        <div>Статья отредактированна!</div>
      )}
    </DynamicReducerLoader>
  )
}

export default ArticleEditPage
