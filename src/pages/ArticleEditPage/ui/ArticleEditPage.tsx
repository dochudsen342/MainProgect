import React from 'react'
import cl from './ArticleEditPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import PageWrapper from 'shared/ui/PageWrapper/PageWrapper'
import { useParams } from 'react-router-dom'
import EditableArticle from 'features/EditArticleForm/ui/EditArticleForm/EditArticleForm'
import DynamicReducerLoader, {
  ReducerList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { editArticleFormReducer } from 'features/EditArticleForm/model/slice/editArticleSlice'

interface ArticleEditPageProps {
  className?: string
}
const reducerList: ReducerList = {
  articleEditPage: editArticleFormReducer,
}
const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>()
  if (!id) {
    return null
  }
  const isEdit = Boolean(id)
  return (
    <DynamicReducerLoader reducers={reducerList} removeAfterUnmount={true}>
      <PageWrapper className={classNames(cl.ArticleEditPage, {}, [className])}>
        {isEdit ? <EditableArticle id={id} /> : 'Not found'}
      </PageWrapper>
    </DynamicReducerLoader>
  )
}

export default ArticleEditPage
