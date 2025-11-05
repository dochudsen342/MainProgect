import React from 'react'
import cl from './ArticleCreatePage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { CreateArticleForm } from 'features/CreateArticleForm'
import { useCancellReloadPage } from 'shared/lib/hooks/useСancellReloadPage'
import { useSelector } from 'react-redux'
import {
  getCreatedAriticleId,
  getCreatorAriticleIsCreated,
  getCreatorArticleIsLoading,
} from 'features/CreateArticleForm/model/selectors/createArticleSelectors'
import { PageLoader } from 'widgets/PageLoader'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleCreatePageProps {
  className?: string
}

const ArticleCreatePage = ({ className }: ArticleCreatePageProps) => {
  const isLoading = useSelector(getCreatorArticleIsLoading)
  const isCreated = useSelector(getCreatorAriticleIsCreated)
  const createdArticleId = useSelector(getCreatedAriticleId)
  useCancellReloadPage()

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className={classNames(cl.ArticleCreatePage, {}, [className])}>
      {isCreated ? (
        <div>
          Статья создана!
          <AppLink to={RoutePath.article_deteails + createdArticleId}>
            Перейти на созданную статью
          </AppLink>
        </div>
      ) : (
        <CreateArticleForm />
      )}
    </div>
  )
}

export default ArticleCreatePage
