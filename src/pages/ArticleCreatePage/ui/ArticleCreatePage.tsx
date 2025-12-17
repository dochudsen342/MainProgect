import React from 'react'
import { useCancellReloadPage } from '@/shared/lib/hooks/useСancellReloadPage'
import { useSelector } from 'react-redux'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import {
  articleCrudFormReducer,
  getCrudArticleCreatedArticleId,
  getCrudArticleIsCreated,
} from '@/features/ArticleCrudForm'
import PageWrapper from '@/shared/ui/PageWrapper/PageWrapper'
import DynamicReducerLoader, {
  ReducerList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import ArticleCreateForm from '@/features/ArticleCrudForm/ui/ArticleCreateForm/ArticleCreateForm'

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
            <AppLink to={RoutePath.article_deteails + createdArticleId}>
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
