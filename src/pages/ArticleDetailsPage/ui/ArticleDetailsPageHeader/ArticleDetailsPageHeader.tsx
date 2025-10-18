import React, { useCallback } from 'react'
import cl from './ArticleDetailsPageHeader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from 'entities/Article'
import { getCanUserEditinsArticle } from '../../model/selectors/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const isEditing = useSelector(getCanUserEditinsArticle)
  const articleData = useSelector(getArticleDetailsData)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])
  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_deteails}${articleData?.id}/edit`)
  }, [articleData?.id, navigate])
  const onCreateArticle = useCallback(() => {
    navigate(RoutePath.articles)
  }, [])

  return (
    <div className={classNames(cl.ArticleDetailsPageHeader, {}, [className])}>
      <Button className={cl.backBtn} onClick={onBackToList} theme={ThemeButton.OUTLINE}>
        {t('Назад к списку')}
      </Button>
      {isEditing && (
        <Button onClick={onEditArticle} className={cl.EditBtn} theme={ThemeButton.OUTLINE}>
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
}

export default ArticleDetailsPageHeader
