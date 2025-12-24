import {
  articleCrudFormReducer,
  getCrudArticleCreatedArticleId,
  getCrudArticleIsCreated,
} from '@/features/ArticleCrudForm'
import ArticleCreateForm from '@/features/ArticleCrudForm/ui/ArticleCreateForm/ArticleCreateForm'
import { getRouteArticleDetails } from '@/shared/const/router'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { useCancellReloadPage } from '@/shared/lib/hooks/useСancellReloadPage'
import { AppLink } from '@/shared/ui/AppLink'
import { PageWrapper } from '@/shared/ui/PageWrapper'
import { useSelector } from 'react-redux'

interface ArticleCreatePageProps {
  className?: string
}

const reducers: ReducerList = {
  articleCrudForm: articleCrudFormReducer,
}

const ArticleCreatePage = ({ className }: ArticleCreatePageProps) => {
  const isCreated = useSelector(getCrudArticleIsCreated)
  const createdArticleId = useSelector(getCrudArticleCreatedArticleId)
  useCancellReloadPage()

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={true}>
      <PageWrapper>
        {isCreated ? (
          <div>
            Статья создана!
            <AppLink to={getRouteArticleDetails(createdArticleId)}>
              Перейти на созданную статью
            </AppLink>
          </div>
        ) : (
          <ArticleCreateForm />
        )}
      </PageWrapper>
    </DynamicReducerLoader>
  )
}

export default ArticleCreatePage
