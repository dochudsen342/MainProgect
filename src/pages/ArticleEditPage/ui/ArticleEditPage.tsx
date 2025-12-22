import { articleCrudFormReducer, getCrudArticleIsCreated } from '@/features/ArticleCrudForm'
import ArticleEditForm from '@/features/ArticleCrudForm/ui/ArticleEditForm/ArticleEditForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

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
        <PageWrapper className={classNames('', {}, [className])}>
          {isEdit ? <ArticleEditForm articleId={id} /> : 'Not found'}
        </PageWrapper>
      ) : (
        <div>Статья отредактированна!</div>
      )}
    </DynamicReducerLoader>
  )
}

export default ArticleEditPage
